const IMAGE_EXT = /\.(jpe?g|png|webp|gif|heic|heif)$/i

export const DRIVE_FOLDERS = {
  particulares: "14mc04UM6yvoMowxZIZr4TZzO50kYWW0H",
  comerciales: "1urknB99QY_ei3EG6ztsqOAJaU9sqDYRs",
} as const

export type DriveImage = {
  src: string
  alt: string
}

export async function listDriveImages(folderId: string): Promise<DriveImage[]> {
  try {
    const response = await fetch(
      `https://drive.google.com/embeddedfolderview?id=${folderId}`,
      { next: { revalidate: 300 } }
    )
    if (!response.ok) return []

    const html = await response.text()
    const images: DriveImage[] = []
    const entryPattern =
      /id="entry-([^"]+)"[\s\S]*?class="flip-entry-title">([^<]*)</g

    for (const match of html.matchAll(entryPattern)) {
      const id = match[1]
      const name = decodeHtml(match[2]).trim()
      if (!name || !IMAGE_EXT.test(name)) continue
      images.push({
        src: `https://lh3.googleusercontent.com/d/${id}=s1600`,
        alt: name.replace(IMAGE_EXT, "").replace(/[-_]+/g, " "),
      })
    }

    return images
  } catch {
    return []
  }
}

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}
