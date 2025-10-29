"use client"

import { useState } from "react"
import SidebarNavigation from "@/components/sidebar-navigation"
import ContentBrowser from "@/components/content-browser"
import MCQViewer from "@/components/mcq-viewer"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null)
  const [selectedChapterName, setSelectedChapterName] = useState("")

  const handleSelectChapter = (chapterId: string, chapterName: string) => {
    setSelectedChapterId(chapterId)
    setSelectedChapterName(chapterName)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <SidebarNavigation onSelectChapter={handleSelectChapter} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">বাংলাদেশ শিক্ষা প্ল্যাটফর্ম</h1>
          <Link href="/admin">
            <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
              <LogIn className="w-4 h-4" />
              প্রশাসক
            </Button>
          </Link>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {selectedChapterId ? (
            <div className="p-8">
              <BreadcrumbNavigation chapter={selectedChapterName} />
              <MCQViewer chapterId={selectedChapterId} chapterName={selectedChapterName} />
            </div>
          ) : (
            <ContentBrowser selectedChapterId={selectedChapterId} onChapterSelect={handleSelectChapter} />
          )}
        </div>
      </div>
    </div>
  )
}
