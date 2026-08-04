import { prisma } from "@/lib/prisma";

export async function getUserById(id: string) {
  console.log(id)
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  console.log(user);

  return user;
}