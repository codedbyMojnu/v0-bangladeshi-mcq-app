"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Award, BookOpen, TrendingUp } from "lucide-react"

interface UserProfileProps {
  userId: string
}

export default function UserProfile({ userId }: UserProfileProps) {
  const [profileData, setProfileData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/user/profile?userId=${userId}`)
        const data = await response.json()
        setProfileData(data)
      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [userId])

  if (loading) {
    return <div className="p-8 text-center">লোড হচ্ছে...</div>
  }

  if (!profileData) {
    return <div className="p-8 text-center">প্রোফাইল খুঁজে পাওয়া যায়নি</div>
  }

  const { user, courseProgress, subjectProgress, averageScore, totalQuestionsAnswered, totalCorrectAnswers } =
    profileData

  return (
    <div className="space-y-6 p-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
          <p className="text-muted-foreground mt-1">{user.email}</p>
          <div className="flex gap-2 mt-3">
            <Badge variant={user.tier === "premium" ? "default" : "secondary"}>
              {user.tier === "premium" ? "প্রিমিয়াম সদস্য" : "বিনামূল্যে সদস্য"}
            </Badge>
            <Badge variant="outline">{user.role === "admin" ? "প্রশাসক" : "শিক্ষার্থী"}</Badge>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">গড় স্কোর</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageScore}%</div>
            <p className="text-xs text-muted-foreground mt-1">সমস্ত পরীক্ষা জুড়ে</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">প্রশ্নের উত্তর দেওয়া</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalQuestionsAnswered}</div>
            <p className="text-xs text-muted-foreground mt-1">মোট প্রশ্ন</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">সঠিক উত্তর</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCorrectAnswers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalQuestionsAnswered > 0 ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100) : 0}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">সম্পন্ন কোর্স</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courseProgress.filter((c: any) => c.certificateEarned).length}</div>
            <p className="text-xs text-muted-foreground mt-1">সার্টিফিকেট অর্জিত</p>
          </CardContent>
        </Card>
      </div>

      {/* Course Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            কোর্স অগ্রগতি
          </CardTitle>
          <CardDescription>আপনার নথিভুক্ত কোর্সগুলিতে অগ্রগতি</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {courseProgress.map((course: any) => (
            <div key={course.courseId} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{course.courseId}</span>
                <span className="text-sm text-muted-foreground">
                  {course.completedChapters}/{course.totalChapters} অধ্যায়
                </span>
              </div>
              <Progress value={course.completionPercentage} className="h-2" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{course.completionPercentage}% সম্পন্ন</span>
                {course.certificateEarned && (
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    সার্টিফিকেট ডাউনলোড করুন
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Subject Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            বিষয় অগ্রগতি
          </CardTitle>
          <CardDescription>প্রতিটি বিষয়ে আপনার অগ্রগতি</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjectProgress.map((subject: any) => (
              <div key={subject.subjectId} className="space-y-2 p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{subject.subjectId}</span>
                  <span className="text-xs text-muted-foreground">
                    {subject.completedChapters}/{subject.totalChapters}
                  </span>
                </div>
                <Progress value={subject.completionPercentage} className="h-1.5" />
                <span className="text-xs text-muted-foreground">{subject.completionPercentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Premium Features */}
      {user.tier === "free" && (
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              প্রিমিয়াম আপগ্রেড করুন
            </CardTitle>
            <CardDescription>আরও বৈশিষ্ট্য এবং সুবিধা আনলক করুন</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> সীমাহীন কোর্স অ্যাক্সেস
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> অগ্রাধিকার সহায়তা
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> অফলাইন ডাউনলোড
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> বিশ্লেষণ এবং অন্তর্দৃষ্টি
              </li>
            </ul>
            <Button className="w-full">প্রিমিয়াম আপগ্রেড করুন</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
