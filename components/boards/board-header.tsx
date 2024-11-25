'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExperimentSelect } from './experiment-select';
import { useState } from 'react';
import { CreateBountyDialog } from './create-bounty-dialog';

export function BoardHeader() {
  const [showBountyDialog, setShowBountyDialog] = useState(false);

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Bounty Board</h1>
      <div className="flex gap-4">
        <ExperimentSelect />
        <Button onClick={() => setShowBountyDialog(true)}>
          <Plus className="mr-2 h-4 w-4" /> New Bounty
        </Button>
      </div>
      <CreateBountyDialog 
        open={showBountyDialog} 
        onOpenChange={setShowBountyDialog}
      />
    </div>
  );
}