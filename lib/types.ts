// Type definitions for the education platform
export interface Course {
  id: string
  name: string
  description: string
  icon: string
}

export interface Subject {
  id: string
  courseId: string
  name: string
}

export interface Chapter {
  id: string
  subjectId: string
  name: string
  description?: string
}

export interface Question {
  id: string
  chapterId: string
  type: "normal" | "passage" | "multiStatement"
  question: string
  passage?: string
  options: string[]
  correctAnswer: string
  explanation?: string
}

export interface User {
  id: string
  email: string
  role: "student" | "admin"
  createdAt: Date
}

export interface NavigationState {
  expandedCourses: string[]
  expandedSubjects: string[]
  selectedChapter: string | null
}

export interface ChapterContent {
  id: string
  chapterId: string
  title: string
  filePath: string // Path to .mdx file
  lastUpdated: Date
}

export interface UserProgress {
  id: string
  userId: string
  courseId: string
  subjectId: string
  chapterId: string
  questionsAnswered: number
  correctAnswers: number
  completedAt?: Date
}

export interface UserProfile {
  id: string
  email: string
  name: string
  role: "student" | "admin"
  tier: "free" | "premium"
  coursesEnrolled: string[]
  createdAt: Date
  updatedAt: Date
}

export interface CourseProgress {
  courseId: string
  totalChapters: number
  completedChapters: number
  completionPercentage: number
  certificateEarned: boolean
}

export interface Certificate {
  id: string
  userId: string
  courseId: string
  courseName: string
  issuedDate: Date
  certificateUrl: string
}
