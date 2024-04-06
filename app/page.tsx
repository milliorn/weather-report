import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to <span className="text-blue-600">Tailwind CSS</span>
      </h1>
      <Image
        src="/tailwindcss-logo.svg"
        alt="Tailwind CSS Logo"
        width={300}
        height={300}
      />
    </main>
  );
}
