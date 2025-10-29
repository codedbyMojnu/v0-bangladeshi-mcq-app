/**
 * MDX content is now stored directly in lib/db.ts
 * This file is kept for reference but file system reading is no longer used
 */

export function getChapterContentPath(courseId: string, subjectId: string, chapterId: string): string {
  return `chapters/${courseId}/${subjectId}/${chapterId}.mdx`
}
