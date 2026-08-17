import { UserSettingsForm } from '@/components/settings/UserSettingsForm';
import { getCurrentUser } from '@/services/auth';
import { CONTENT } from '@/constants/content';
import type { Metadata } from 'next';

export const metadata: Metadata = CONTENT.metadata.settings;

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return <UserSettingsForm user={user} />;
}
