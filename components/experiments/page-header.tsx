import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PageHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">GEMs Dashboard</h1>
      <Button>
        <Plus className="mr-2 h-4 w-4" /> New Project
      </Button>
    </div>
  );
}