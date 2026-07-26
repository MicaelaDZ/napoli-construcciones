const sharp = require("sharp")
const path = require("path")

const src = path.join("public", "images", "logo.jpg")
const out = path.join("public", "images", "logo-nav.png")

async function main() {
  const meta = await sharp(src).metadata()
  const ratio = (meta.height || 256) / (meta.width || 195)

  const logoW = 168
  const logoH = Math.round(logoW * ratio)
  const pad = 14
  const plateW = logoW + pad * 2
  const plateH = logoH + pad * 2
  const glow = 36
  const canvasW = plateW + glow * 2
  const canvasH = plateH + glow * 2
  const radius = 22

  const cream = { r: 255, g: 247, b: 230, alpha: 1 }

  const logo = await sharp(src)
    .resize(logoW, logoH, {
      fit: "fill",
    })
    .png()
    .toBuffer()

  const frameSvg = Buffer.from(`<svg width="${canvasW}" height="${canvasH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" rx="50%" ry="50%">
      <stop offset="0%" stop-color="#fff6d6" stop-opacity="0.5"/>
      <stop offset="45%" stop-color="#f5c518" stop-opacity="0.2"/>
      <stop offset="75%" stop-color="#f5c518" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="plate" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fffaf0"/>
      <stop offset="100%" stop-color="#f3e4b8"/>
    </linearGradient>
  </defs>
  <ellipse cx="${canvasW / 2}" cy="${canvasH / 2}" rx="${canvasW / 2}" ry="${canvasH / 2}" fill="url(#glow)"/>
  <rect
    x="${glow}"
    y="${glow}"
    width="${plateW}"
    height="${plateH}"
    rx="${radius}"
    ry="${radius}"
    fill="url(#plate)"
  />
</svg>`)

  const frame = await sharp(frameSvg).png().toBuffer()

  const composed = await sharp(frame)
    .composite([
      {
        input: logo,
        top: glow + pad,
        left: glow + pad,
      },
    ])
    .png()
    .toBuffer()

  const maskSvg = Buffer.from(`<svg width="${canvasW}" height="${canvasH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="m" cx="50%" cy="50%" rx="50%" ry="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="72%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#000000"/>
    </radialGradient>
  </defs>
  <ellipse cx="${canvasW / 2}" cy="${canvasH / 2}" rx="${canvasW / 2}" ry="${canvasH / 2}" fill="url(#m)"/>
</svg>`)

  await sharp(composed)
    .ensureAlpha()
    .composite([
      {
        input: await sharp(maskSvg).png().toBuffer(),
        blend: "dest-in",
      },
    ])
    .png()
    .toFile(out)

  console.log("created", out, `${canvasW}x${canvasH}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
