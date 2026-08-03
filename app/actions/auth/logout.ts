import { deleteSession } from "@/lib/sessions"
import { redirect } from "next/dist/server/api-utils"

export async function logout() {
  await deleteSession()
//   redirect('/login')
}