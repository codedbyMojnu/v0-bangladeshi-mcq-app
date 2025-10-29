import { coursesData } from "@/lib/db"

export async function GET() {
  return Response.json(coursesData)
}
