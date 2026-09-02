import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = process.env.CRYPTO_KEY as string;
const iv = crypto.randomBytes(16);

export function encrypt (text: string) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);

    const encrypted = Buffer.concat([cipher.update(text.toString()), cipher.final()]);

    return {
        iv: iv.toString(),
        content: encrypted.toString('hex'),
    };
};

export const decrypt = (hash: string) => {
    const [newIv, text] = hash.split(':');

    const decipher = crypto.createDecipheriv(
        algorithm,
        secretKey,
        Buffer.from(newIv, 'hex')
    );

    const decrypted = Buffer.concat(
        [decipher.update(Buffer.from(text, 'hex')), decipher.final()]
    );

    return decrypted.toString();
};