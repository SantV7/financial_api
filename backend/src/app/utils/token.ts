import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import type { Response } from 'express';

const decrypt = (hash: string, res: Response) => {

    if(typeof(hash) !== 'string') {
       return res.status(400).json({message: ' O hash não pode ser diferente de string.'});
    };

};