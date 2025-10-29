"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import type { Course, Subject, Chapter } from "@/lib/types"

interface SidebarNavigationProps {
  onSelectChapter: (chapterId: string, chapterName: string) => void
  onSelectSubject?: (subjectId: string) => void
}

export default function SidebarNavigation({ onSelectChapter, onSelectSubject }: SidebarNavigationProps) {
  const [courses, setCourses] = useState<Course[]>([])
  const [expandedCourses, setExpandedCourses] = useState<string[]>([])
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({})
  const [subjectsMap, setSubjectsMap] = useState<Record<string, Subject[]>>({})
  const [chaptersMap, setChaptersMap] = useState<Record<string, Chapter[]>>({})
  const [loading, setLoading] = useState(true)

  // Fetch courses on mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses")
        const data = await res.json()
        setCourses(data)
      } catch (error) {
        console.error("Failed to fetch courses:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  // Toggle course expansion
  const toggleCourse = async (courseId: string) => {
    if (expandedCourses.includes(courseId)) {
      setExpandedCourses(expandedCourses.filter((id) => id !== courseId))
    } else {
      setExpandedCourses([...expandedCourses, courseId])

      // Fetch subjects if not already loaded
      if (!subjectsMap[courseId]) {
        try {
          const res = await fetch(`/api/subjects?courseId=${courseId}`)
          const data = await res.json()
          setSubjectsMap((prev) => ({ ...prev, [courseId]: data }))
        } catch (error) {
          console.error("Failed to fetch subjects:", error)
        }
      }
    }
  }

  // Toggle subject expansion
  const toggleSubject = async (subjectId: string) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }))

    // Fetch chapters if not already loaded
    if (!chaptersMap[subjectId]) {
      try {
        const res = await fetch(`/api/chapters?subjectId=${subjectId}`)
        const data = await res.json()
        setChaptersMap((prev) => ({ ...prev, [subjectId]: data }))
      } catch (error) {
        console.error("Failed to fetch chapters:", error)
      }
    }
  }

  if (loading) {
    return <div className="p-4 text-sm text-muted-foreground">লোড হচ্ছে...</div>
  }

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto h-screen">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="font-bold text-lg text-sidebar-foreground">কোর্স সমূহ</h2>
      </div>

      <div className="p-2">
        {courses.map((course) => (
          <div key={course.id} className="mb-1">
            {/* Course Item */}
            <button
              onClick={() => toggleCourse(course.id)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground text-sm font-medium transition-colors"
            >
              <ChevronRight
                className={`w-4 h-4 transition-transform ${expandedCourses.includes(course.id) ? "rotate-90" : ""}`}
              />
              <span>{course.icon}</span>
              <span className="flex-1 text-left">{course.name}</span>
            </button>

            {/* Subjects List */}
            {expandedCourses.includes(course.id) && (
              <div className="ml-4 border-l border-sidebar-border">
                {subjectsMap[course.id]?.map((subject) => (
                  <div key={subject.id} className="mb-1">
                    {/* Subject Item */}
                    <button
                      onClick={() => toggleSubject(subject.id)}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-sidebar-accent text-sidebar-foreground text-sm transition-colors"
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${expandedSubjects[subject.id] ? "rotate-90" : ""}`}
                      />
                      <span className="flex-1 text-left">{subject.name}</span>
                    </button>

                    {/* Chapters List */}
                    {expandedSubjects[subject.id] && (
                      <div className="ml-4 border-l border-sidebar-border">
                        {chaptersMap[subject.id]?.map((chapter) => (
                          <button
                            key={chapter.id}
                            onClick={() => onSelectChapter(chapter.id, chapter.name)}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-sidebar-primary hover:text-sidebar-primary-foreground text-sidebar-foreground text-sm transition-colors text-left"
                          >
                            <span className="w-4 h-4 flex items-center justify-center text-xs">📄</span>
                            <span className="flex-1">{chapter.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
