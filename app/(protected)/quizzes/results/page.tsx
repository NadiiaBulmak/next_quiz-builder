import { getCurrentUser } from "@/services/auth";

export default async function AllQuizzes() {
  const user = await getCurrentUser();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black  px-3 md:px-6 py-3 md:py-6 gap-4">

    </div>
  );
}
