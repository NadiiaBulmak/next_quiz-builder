import crypto from 'crypto';
import { prisma } from '@/lib/prisma';

export const createResetToken = async (userId: string): Promise<string> => {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 3600000);

  await prisma.resetToken.upsert({
    where: {
      userId,
    },
    update: {
      tokenHash: crypto.createHash('sha256').update(token).digest('hex'),
      expiresAt: expiresAt,
      usedAt: null,
    },
    create: {
      userId,
      tokenHash: crypto.createHash('sha256').update(token).digest('hex'),
      expiresAt: expiresAt,
    },
  });

  return token;
};

