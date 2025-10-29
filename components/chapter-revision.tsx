"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import MDXRenderer from "./mdx-renderer"

interface ChapterRevisionProps {
  chapterId: string
  chapterName: string
}

export default function ChapterRevision({ chapterId, chapterName }: ChapterRevisionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isExpanded && !content && !error) {
      const fetchContent = async () => {
        setLoading(true)
        setError(null)
        try {
          const res = await fetch(`/api/chapter-content?chapterId=${chapterId}`)
          if (!res.ok) {
            throw new Error("Failed to load chapter content")
          }
          const data = await res.json()
          setContent(data.content)
        } catch (err) {
          console.error("Error loading chapter content:", err)
          setError("বিষয়বস্তু লোড করতে ব্যর্থ হয়েছে")
        } finally {
          setLoading(false)
        }
      }
      fetchContent()
    }
  }, [isExpanded, chapterId, content, error])

  return (
    <div className="mb-8 no-print">
      {/* Revision Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 text-lg font-semibold rounded-lg shadow-md"
      >
        <span>📚 এই অধ্যায়ের পুনরালোচনা করুন</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
      </Button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2">বিষয়বস্তু লোড হচ্ছে...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-600 bg-red-50 border border-red-200 rounded-lg">{error}</div>
          ) : content ? (
            <MDXRenderer content={content} />
          ) : (
            <div className="p-8 text-center text-muted-foreground bg-card border border-border rounded-lg">
              এই অধ্যায়ের জন্য কোনো বিষয়বস্তু উপলব্ধ নেই।
            </div>
          )}
        </div>
      )}
    </div>
  )
}
