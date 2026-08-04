import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCurrentUser } from "@/services/auth";

export default async function CreateQuiz() {
  const user = await getCurrentUser();
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <div className="flex flex-col gap-2 w-full max-w-md p-4">
        <Label >Quiz Title</Label>
        <Input type="text" placeholder="Enter quiz title..." />
      </div>
    </div>
  );
}
