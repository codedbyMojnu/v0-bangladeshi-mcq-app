"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LogOut, Plus } from "lucide-react"
import AdminLogin from "@/components/admin-login"
import SidebarNavigation from "@/components/sidebar-navigation"
import MCQViewer from "@/components/mcq-viewer"
import AdminEditor from "@/components/admin-editor"
import type { Question } from "@/lib/types"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null)
  const [selectedChapterName, setSelectedChapterName] = useState("")
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null)
  const [showEditor, setShowEditor] = useState(false)

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLoginSuccess = (token: string) => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    setIsLoggedIn(false)
    setSelectedChapterId(null)
  }

  const handleSelectChapter = (chapterId: string, chapterName: string) => {
    setSelectedChapterId(chapterId)
    setSelectedChapterName(chapterName)
  }

  const handleEditQuestion = (questionId: string) => {
    // In a real app, fetch the question from the database
    setEditingQuestion({ id: questionId } as Question)
    setShowEditor(true)
  }

  const handleSaveQuestion = async (question: Partial<Question>) => {
    try {
      // In a real app, save to database
      console.log("Saving question:", question)
      setShowEditor(false)
      setEditingQuestion(null)
      alert("প্রশ্ন সংরক্ষিত হয়েছে")
    } catch (error) {
      console.error("Failed to save question:", error)
      alert("প্রশ্ন সংরক্ষণ ব্যর্থ হয়েছে")
    }
  }

  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <SidebarNavigation onSelectChapter={handleSelectChapter} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">প্রশাসক প্যানেল</h1>
          <div className="flex gap-3">
            {selectedChapterId && (
              <Button
                onClick={() => setShowEditor(true)}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                <Plus className="w-4 h-4" />
                নতুন প্রশ্ন যোগ করুন
              </Button>
            )}
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 bg-transparent">
              <LogOut className="w-4 h-4" />
              লগআউট
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {selectedChapterId ? (
            <MCQViewer
              chapterId={selectedChapterId}
              chapterName={selectedChapterName}
              isAdmin={true}
              onEditQuestion={handleEditQuestion}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>একটি অধ্যায় নির্বাচন করুন শুরু করতে</p>
            </div>
          )}
        </div>
      </div>

      {/* Editor Modal */}
      {showEditor && (
        <AdminEditor
          question={editingQuestion || undefined}
          onSave={handleSaveQuestion}
          onCancel={() => {
            setShowEditor(false)
            setEditingQuestion(null)
          }}
          chapterId={selectedChapterId || ""}
        />
      )}
    </div>
  )
}
