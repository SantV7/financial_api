import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export const decrypt = async (authHeader: string) => {
  const [, token] = authHeader.split(' ');

  const verifyAsync = promisify(jwt.verify) as (
    token: string,
    secretOrPublicKey: jwt.Secret
  ) => Promise<jwt.JwtPayload | string>;

  return verifyAsync(token, process.env.CRYPTO_KEY as string);
};