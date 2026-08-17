import { UserSettingsForm } from '@/components/settings/UserSettingsForm';
import { getCurrentUser } from '@/services/auth';

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return <UserSettingsForm user={user} />;
}
