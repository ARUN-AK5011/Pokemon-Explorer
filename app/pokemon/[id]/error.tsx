"use client";
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong. 😢</h2>
      <p className="text-gray-700">Please try again later.</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Retry 🔄
      </button>
    </div>
  );
}
