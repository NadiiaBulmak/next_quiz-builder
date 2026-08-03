import { getCurrentUser } from "@/lib/auth";

export default async function Dashboard() {
  const user = await getCurrentUser();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {user && <p>Name: {user.name}</p>}
      </main>
    </div>
  );
}
