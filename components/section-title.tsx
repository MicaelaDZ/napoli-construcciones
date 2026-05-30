type SectionTitleProps = {
  highlight: string
  rest: string
  className?: string
  as?: "h2" | "h3"
}

export function SectionTitle({
  highlight,
  rest,
  className = "",
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <Tag
      className={`text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide ${className}`}
    >
      <span className="text-brand">{highlight}</span>{" "}
      <span className="text-inherit">{rest}</span>
    </Tag>
  )
}
