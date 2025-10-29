interface BreadcrumbNavigationProps {
  course?: string
  subject?: string
  chapter?: string
}

export default function BreadcrumbNavigation({ course, subject, chapter }: BreadcrumbNavigationProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
      <span>হোম</span>
      {course && (
        <>
          <span>/</span>
          <span>{course}</span>
        </>
      )}
      {subject && (
        <>
          <span>/</span>
          <span>{subject}</span>
        </>
      )}
      {chapter && (
        <>
          <span>/</span>
          <span className="text-foreground font-medium">{chapter}</span>
        </>
      )}
    </div>
  )
}
