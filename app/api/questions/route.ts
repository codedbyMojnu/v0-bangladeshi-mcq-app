import { questionsData } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const chapterId = searchParams.get("chapterId")

  if (!chapterId) {
    return Response.json({ error: "chapterId required" }, { status: 400 })
  }

  const questions = questionsData[chapterId] || []
  return Response.json(questions)
}
