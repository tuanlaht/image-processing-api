import sharp from 'sharp'

const resizeImage = (file_name: string, width: string, height: string) => {
  const imageUrl = `./images/${file_name}.jpg`

  try {
    const result = sharp(imageUrl)
    result.resize(Number(width), Number(height))
    return result
  } catch (error: unknown) {
    console.log(error)
  }
}

export default resizeImage
