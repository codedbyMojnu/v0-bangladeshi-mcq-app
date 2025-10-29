import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateCourseProgress(courseId: string, userProgress: any[], chaptersData: Record<string, any[]>) {
  const courseChapters = Object.values(chaptersData)
    .flat()
    .filter((ch: any) => {
      const subject = Object.entries(chaptersData).find(([_, chapters]) => chapters.includes(ch))?.[0]
      return subject
    })

  const completedChapters = userProgress
    .filter((p) => p.courseId === courseId)
    .map((p) => p.chapterId)
    .filter((id, index, arr) => arr.indexOf(id) === index).length

  const totalChapters = courseChapters.length
  const completionPercentage = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0

  return {
    courseId,
    totalChapters,
    completedChapters,
    completionPercentage,
    certificateEarned: completionPercentage === 100,
  }
}

export function calculateSubjectProgress(subjectId: string, userProgress: any[], chaptersData: Record<string, any[]>) {
  const subjectChapters = chaptersData[subjectId] || []
  const completedChapters = userProgress
    .filter((p) => p.subjectId === subjectId)
    .map((p) => p.chapterId)
    .filter((id, index, arr) => arr.indexOf(id) === index).length

  const totalChapters = subjectChapters.length
  const completionPercentage = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0

  return {
    subjectId,
    totalChapters,
    completedChapters,
    completionPercentage,
  }
}

export function calculateAverageScore(userProgress: any[]) {
  if (userProgress.length === 0) return 0
  const totalScore = userProgress.reduce((sum, p) => sum + (p.correctAnswers / p.questionsAnswered) * 100, 0)
  return Math.round(totalScore / userProgress.length)
}

export function generateCertificateId(userId: string, courseId: string) {
  return `CERT-${userId}-${courseId}-${Date.now()}`
}
