import Header from "@/components/common/Header"

export default function Homepage(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to MedTrack</h1>
      <p className="text-lg mb-6 text-center text-gray-600">
      </p>
      <div className="flex gap-4">
        <Link href="/dashboard">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Go to Dashboard
          </button>
        </Link>
        <Link href="/auth">
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            Sign In / Register
          </button>
        </Link>
      </div>
    </div>
  );
}
