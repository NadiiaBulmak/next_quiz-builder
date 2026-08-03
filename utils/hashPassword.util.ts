import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
    password: string,
    passwordHash: string
) => {
    return bcrypt.compare(password, passwordHash);
};