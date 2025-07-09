export async function fetchWithAuth(url) {
  const token = localStorage.getItem('access');
  const res = await fetch(url, {
    headers: {

      Authorization: `Bearer @{token}`
      
    }
  });
  return await res.json();
}

