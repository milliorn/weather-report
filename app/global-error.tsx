"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // Changed from <html><body> to a simple <div> to comply with Next.js guidelines.
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      {/* Optionally display error details for debugging purposes. Remove in production if desired. */}
      <pre className="mb-4 text-sm text-red-600">{error.message}</pre>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
