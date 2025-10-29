import { usersData, userProgressData, chaptersData, subjectsData } from "@/lib/db"
import { calculateCourseProgress, calculateSubjectProgress, calculateAverageScore } from "@/lib/utils"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId || !usersData[userId]) {
    return Response.json({ error: "User not found" }, { status: 404 })
  }

  const user = usersData[userId]
  const progress = userProgressData[userId] || []

  const courseProgress = user.coursesEnrolled.map((courseId: string) =>
    calculateCourseProgress(courseId, progress, chaptersData),
  )

  const subjectProgress = Object.keys(subjectsData)
    .filter((subjectId) => {
      const subject = Object.values(subjectsData)
        .flat()
        .find((s: any) => s.id === subjectId)
      return subject && user.coursesEnrolled.includes(subject.courseId)
    })
    .map((subjectId) => calculateSubjectProgress(subjectId, progress, chaptersData))

  const averageScore = calculateAverageScore(progress)

  return Response.json({
    user,
    courseProgress,
    subjectProgress,
    averageScore,
    totalQuestionsAnswered: progress.length,
    totalCorrectAnswers: progress.reduce((sum, p) => sum + p.correctAnswers, 0),
  })
}
