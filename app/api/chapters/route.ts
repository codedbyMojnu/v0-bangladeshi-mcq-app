import { chaptersData } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const subjectId = searchParams.get("subjectId")

  if (!subjectId) {
    return Response.json({ error: "subjectId required" }, { status: 400 })
  }

  const chapters = chaptersData[subjectId] || []
  return Response.json(chapters)
}
