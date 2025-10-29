"use client"

import { useState } from "react"
import type { Course, Subject, Chapter } from "@/lib/types"
import { coursesData, subjectsData, chaptersData } from "@/lib/db"

interface ContentBrowserProps {
  selectedChapterId?: string
  onChapterSelect: (chapterId: string, chapterName: string) => void
}

export default function ContentBrowser({ selectedChapterId, onChapterSelect }: ContentBrowserProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [chapters, setChapters] = useState<Chapter[]>([])

  // When a course is selected
  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course)
    setSelectedSubject(null)
    setChapters([])
    const courseSubjects = subjectsData[course.id] || []
    setSubjects(courseSubjects)
  }

  // When a subject is selected
  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    const subjectChapters = chaptersData[subject.id] || []
    setChapters(subjectChapters)
  }

  return (
    <div className="flex-1 bg-background">
      {/* Courses View */}
      {!selectedCourse && (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-foreground">সকল কোর্স</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course) => (
              <button
                key={course.id}
                onClick={() => handleCourseSelect(course)}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary transition-all text-left"
              >
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{course.name}</h3>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Subjects View */}
      {selectedCourse && !selectedSubject && (
        <div className="p-8">
          <button
            onClick={() => {
              setSelectedCourse(null)
              setSubjects([])
            }}
            className="mb-6 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            ← ফিরে যান
          </button>
          <h1 className="text-3xl font-bold mb-2 text-foreground">{selectedCourse.name}</h1>
          <p className="text-muted-foreground mb-8">{selectedCourse.description}</p>

          <h2 className="text-2xl font-bold mb-6 text-foreground">বিষয় সমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => handleSubjectSelect(subject)}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary transition-all text-left"
              >
                <h3 className="text-xl font-bold text-card-foreground">{subject.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">ক্লিক করুন অধ্যায় দেখতে</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chapters View */}
      {selectedCourse && selectedSubject && (
        <div className="p-8">
          <button
            onClick={() => setSelectedSubject(null)}
            className="mb-6 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            ← ফিরে যান
          </button>
          <h1 className="text-3xl font-bold mb-2 text-foreground">{selectedSubject.name}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {selectedCourse.name} - {selectedSubject.name}
          </p>

          <h2 className="text-2xl font-bold mb-6 text-foreground">অধ্যায় সমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => onChapterSelect(chapter.id, chapter.name)}
                className={`p-6 border rounded-lg transition-all text-left ${
                  selectedChapterId === chapter.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-card border-border hover:shadow-lg hover:border-primary"
                }`}
              >
                <h3 className="text-lg font-bold">{chapter.name}</h3>
                {chapter.description && <p className="text-sm mt-2 opacity-80">{chapter.description}</p>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
