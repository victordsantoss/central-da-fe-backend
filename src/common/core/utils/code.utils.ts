export function generateRandomCode(length: number = 10): string {
  if (length > 10) {
    throw new Error('O tamanho máximo do código é 10 caracteres');
  }

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
