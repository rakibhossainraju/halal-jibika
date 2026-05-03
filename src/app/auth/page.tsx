import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import AuthPageClient from '@/components/auth/AuthPageClient';

export default async function AuthPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect('/profile');
  }

  return <AuthPageClient />;
}
