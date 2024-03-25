import fs from 'fs'
import path from 'path'

export const doesFileExist = (fileName: string, folder: string): boolean => {
  const folderPath = path.resolve(folder)

  try {
    const imageList = fs.readdirSync(folderPath)
    return imageList.some(image => path.parse(image).name === fileName)
  } catch (error) {
    console.error(`Error reading directory ${folderPath}:`, error)
    return false
  }
}
