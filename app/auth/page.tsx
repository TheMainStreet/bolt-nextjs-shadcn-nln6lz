import { AuthTabs } from '@/components/auth/auth-tabs';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <AuthTabs />
    </div>
  );
}