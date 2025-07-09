import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent, roleRequired = null) => {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("access");
      if (!token) {
        router.push("/login");
        return;
      }

      fetch("http://localhost:8000/api/user/", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => {
          if (!res.ok) throw new Error("Unauthorized");
          return res.json();
        })
        .then(user => {
          if (roleRequired && user.role !== roleRequired) {
            router.push("/not-authorized");
          } else {
            setAuthorized(true);
          }
        })
        .catch(() => router.push("/login"));
    }, []);

    return authorized ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;



