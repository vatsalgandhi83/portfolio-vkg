import { userData } from "@/data/user";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{userData.name}</h1>
      <p>{userData.title}</p>
    </main>
  );
}

