"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Save, X, Plus, Trash2 } from "lucide-react"
import type { Question } from "@/lib/types"

interface AdminEditorProps {
  question?: Question
  onSave: (question: Partial<Question>) => void
  onCancel: () => void
  chapterId: string
}

export default function AdminEditor({ question, onSave, onCancel, chapterId }: AdminEditorProps) {
  const [formData, setFormData] = useState<Partial<Question>>(
    question || {
      type: "normal",
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
      explanation: "",
    },
  )

  const [options, setOptions] = useState<string[]>(formData.options || ["", "", "", ""])

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, question: e.target.value }))
  }

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
    setFormData((prev) => ({ ...prev, options: newOptions }))
  }

  const handleAddOption = () => {
    const newOptions = [...options, ""]
    setOptions(newOptions)
    setFormData((prev) => ({ ...prev, options: newOptions }))
  }

  const handleRemoveOption = (index: number) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index)
      setOptions(newOptions)
      setFormData((prev) => ({ ...prev, options: newOptions }))
    }
  }

  const handleExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, explanation: e.target.value }))
  }

  const handleSave = () => {
    if (!formData.question || !formData.correctAnswer || options.some((o) => !o)) {
      alert("সকল ক্ষেত্র পূরণ করুন")
      return
    }
    onSave({ ...formData, chapterId })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border sticky top-0 bg-background">
          <h2 className="text-2xl font-bold text-foreground">{question ? "প্রশ্ন সম্পাদনা করুন" : "নতুন প্রশ্ন যোগ করুন"}</h2>
          <button onClick={onCancel} className="text-muted-foreground hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Question Type */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">প্রশ্নের ধরন</label>
            <select
              value={formData.type || "normal"}
              onChange={(e) => setFormData((prev) => ({ ...prev, type: e.target.value as any }))}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="normal">সাধারণ MCQ</option>
              <option value="passage">উদ্দীপক ভিত্তিক</option>
              <option value="multiStatement">বহুবিবৃতি</option>
            </select>
          </div>

          {/* Question Text */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">প্রশ্ন (Markdown সমর্থিত)</label>
            <textarea
              value={formData.question || ""}
              onChange={handleQuestionChange}
              placeholder="প্রশ্ন লিখুন। গণিত সূত্রের জন্য $...$ ব্যবহার করুন। যেমন: $E = mc^2$"
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground font-mono text-sm"
              rows={4}
            />
            <p className="text-xs text-muted-foreground mt-2">Markdown সমর্থিত: **bold**, *italic*, `code`, $math$</p>
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">বিকল্প সমূহ</label>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={index} className="flex gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      placeholder={`বিকল্প ${index + 1}`}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    />
                  </div>
                  <select
                    value={formData.correctAnswer === option ? "correct" : ""}
                    onChange={(e) => {
                      if (e.target.value === "correct") {
                        setFormData((prev) => ({ ...prev, correctAnswer: option }))
                      }
                    }}
                    className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="correct">সঠিক উত্তর</option>
                  </select>
                  {options.length > 2 && (
                    <button
                      onClick={() => handleRemoveOption(index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handleAddOption}
              className="mt-3 flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-primary/10 rounded-md"
            >
              <Plus className="w-4 h-4" />
              বিকল্প যোগ করুন
            </button>
          </div>

          {/* Explanation */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">ব্যাখ্যা (ঐচ্ছিক)</label>
            <textarea
              value={formData.explanation || ""}
              onChange={handleExplanationChange}
              placeholder="এই প্রশ্নের উত্তর কেন সঠিক তা ব্যাখ্যা করুন"
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground font-mono text-sm"
              rows={3}
            />
          </div>

          {/* Preview */}
          <div className="p-4 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">পূর্বরূপ</h3>
            <div className="space-y-3">
              <p className="text-foreground">{formData.question}</p>
              <div className="space-y-2">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded ${
                      formData.correctAnswer === option ? "bg-green-100 border border-green-500" : "bg-muted"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-border sticky bottom-0 bg-background">
          <Button variant="outline" onClick={onCancel}>
            বাতিল করুন
          </Button>
          <Button onClick={handleSave} className="flex items-center gap-2 bg-primary hover:bg-primary/90">
            <Save className="w-4 h-4" />
            সংরক্ষণ করুন
          </Button>
        </div>
      </div>
    </div>
  )
}
