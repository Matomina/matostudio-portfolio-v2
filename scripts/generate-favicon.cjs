const fs = require('node:fs')
const { execSync } = require('node:child_process')

const source = 'public/source-matostudio-favicon.png'

if (!fs.existsSync(source)) {
  throw new Error('Image source introuvable : ' + source)
}

execSync(
  'npx --yes sharp-cli -i public/source-matostudio-favicon.png -o public/matostudio-favicon.png resize 512 512 --fit contain --background "rgba(0,0,0,0)"',
  { stdio: 'inherit' },
)

execSync(
  'npx --yes sharp-cli -i public/source-matostudio-favicon.png -o public/favicon-192.png resize 192 192 --fit contain --background "rgba(0,0,0,0)"',
  { stdio: 'inherit' },
)

execSync(
  'npx --yes sharp-cli -i public/source-matostudio-favicon.png -o public/apple-touch-icon.png resize 180 180 --fit contain --background "rgba(0,0,0,0)"',
  { stdio: 'inherit' },
)
