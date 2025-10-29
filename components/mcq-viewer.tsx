"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import type { Question } from "@/lib/types"
import ChapterRevision from "./chapter-revision"

interface MCQViewerProps {
  chapterId: string
  chapterName: string
  isAdmin?: boolean
  onEditQuestion?: (questionId: string) => void
}

export default function MCQViewer({ chapterId, chapterName, isAdmin, onEditQuestion }: MCQViewerProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  // Fetch questions for the chapter
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/questions?chapterId=${chapterId}`)
        const data = await res.json()
        setQuestions(data)
        setUserAnswers({})
        setShowResults(false)
      } catch (error) {
        console.error("Failed to fetch questions:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchQuestions()
  }, [chapterId])

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handlePrint = () => {
    window.print()
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return { correct, total: questions.length }
  }

  if (loading) {
    return <div className="p-8 text-center text-muted-foreground">প্রশ্ন লোড হচ্ছে...</div>
  }

  if (questions.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">এই অধ্যায়ে কোনো প্রশ্ন নেই।</div>
  }

  const { correct, total } = calculateScore()
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <div className="flex-1 bg-background">
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 no-print">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{chapterName}</h1>
            <p className="text-muted-foreground mt-2">মোট প্রশ্ন: {total}</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={handlePrint} className="flex items-center gap-2">
              <Printer className="w-4 h-4" />
              প্রিন্ট করুন
            </Button>
            {!showResults && (
              <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
                উত্তর জমা দিন
              </Button>
            )}
          </div>
        </div>

        {/* Chapter Revision Section */}
        <ChapterRevision chapterId={chapterId} chapterName={chapterName} />

        {/* Results Summary */}
        {showResults && (
          <div className="mb-8 p-6 bg-card border border-border rounded-lg no-print">
            <h2 className="text-2xl font-bold mb-4 text-foreground">ফলাফল</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-muted-foreground text-sm">সঠিক উত্তর</p>
                <p className="text-3xl font-bold text-green-600">{correct}</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-sm">মোট প্রশ্ন</p>
                <p className="text-3xl font-bold text-foreground">{total}</p>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-sm">শতাংশ</p>
                <p className="text-3xl font-bold text-blue-600">{percentage}%</p>
              </div>
            </div>
          </div>
        )}

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={question.id} className="p-6 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-foreground">
                  প্রশ্ন {index + 1}: {question.question}
                </h3>
                {isAdmin && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEditQuestion?.(question.id)}
                    className="no-print"
                  >
                    সম্পাদনা
                  </Button>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, optIndex) => {
                  const isSelected = userAnswers[question.id] === option
                  const isCorrect = option === question.correctAnswer
                  const showCorrect = showResults && isCorrect
                  const showIncorrect = showResults && isSelected && !isCorrect

                  return (
                    <label
                      key={optIndex}
                      className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                        showCorrect
                          ? "bg-green-50 border-green-500"
                          : showIncorrect
                            ? "bg-red-50 border-red-500"
                            : isSelected
                              ? "bg-blue-50 border-blue-500"
                              : "bg-background border-border hover:border-primary"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(question.id, option)}
                        disabled={showResults}
                        className="w-4 h-4"
                      />
                      <span className="flex-1 text-foreground">{option}</span>
                      {showCorrect && <span className="text-green-600 font-bold">✓</span>}
                      {showIncorrect && <span className="text-red-600 font-bold">✗</span>}
                    </label>
                  )
                })}
              </div>

              {/* Explanation */}
              {showResults && question.explanation && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900 mb-1">ব্যাখ্যা:</p>
                  <p className="text-sm text-blue-800">{question.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
