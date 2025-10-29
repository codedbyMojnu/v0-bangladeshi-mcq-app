import { type NextRequest, NextResponse } from "next/server"
import { chapterContentsMetadata, chapterContentsData } from "@/lib/db"

export async function GET(request: NextRequest) {
  const chapterId = request.nextUrl.searchParams.get("chapterId")

  if (!chapterId) {
    return NextResponse.json({ error: "Chapter ID is required" }, { status: 400 })
  }

  const metadata = chapterContentsMetadata[chapterId]

  if (!metadata) {
    return NextResponse.json({ error: "Chapter content not found" }, { status: 404 })
  }

  const content = chapterContentsData[chapterId]

  if (!content) {
    return NextResponse.json({ error: "Chapter content not available" }, { status: 404 })
  }

  return NextResponse.json({
    id: chapterId,
    chapterId,
    title: chapterId,
    content,
    filePath: metadata.filePath,
    lastUpdated: new Date(),
  })
}
