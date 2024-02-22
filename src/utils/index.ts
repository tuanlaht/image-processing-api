import sharp from 'sharp'

const resizeImage = (file_name: string, width: number, height: number) => {
  try {
    const result = sharp(file_name).resize(width, height)
    return result
  } catch (error: unknown) {
    console.log(error)
  }
}

export default resizeImage
