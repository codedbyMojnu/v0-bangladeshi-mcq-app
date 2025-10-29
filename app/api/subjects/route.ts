import { subjectsData } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get("courseId")

  if (!courseId) {
    return Response.json({ error: "courseId required" }, { status: 400 })
  }

  const subjects = subjectsData[courseId] || []
  return Response.json(subjects)
}
