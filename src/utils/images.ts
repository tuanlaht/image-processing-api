import sharp from 'sharp'

export const resizeImage = async (fileName: string, width: number, height: number): Promise<sharp.Sharp> => {
  const imageUrl = `./images/${fileName}.jpg`

  try {
    const result = sharp(imageUrl).resize(width, height)
    return result
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message)
    } else {
      console.log('An unknown error occurred')
    }
    throw error
  }
}
