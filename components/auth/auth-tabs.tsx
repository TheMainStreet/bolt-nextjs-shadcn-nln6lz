'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from './login-form';
import { SignupForm } from './signup-form';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function AuthTabs() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>('login');

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signup') {
      setActiveTab('signup');
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl font-bold">Welcome to Cloud Admin Services</h1>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}