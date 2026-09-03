import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = process.env.CRYPTO_KEY as string;

export function encrypt(text: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}


export const decrypt = (hash: string) => {
  const [newIv, text] = hash.split(':');

  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey, 'hex'),
    Buffer.from(newIv, 'hex')
  );
  
  const decrypted = Buffer.concat([decipher.update(Buffer.from(text, 'hex')), decipher.final()]);

  return decrypted.toString();
};