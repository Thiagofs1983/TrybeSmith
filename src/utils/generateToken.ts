import jwt from 'jsonwebtoken';

const JWT_SECRET = 'secret';

const generateToken = (payload: string): string => {
  const token = jwt.sign({ payload }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export default generateToken;