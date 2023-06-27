const convertByteToBase64 = (byte) => {
  // Convertir le champ bytea en un objet Buffer
  const buffer = Buffer.from(byte, "binary")

  // Convertir le Buffer en une chaîne de caractères en base64
  const base64 = buffer.toString("base64")

  return base64
}

export default convertByteToBase64
