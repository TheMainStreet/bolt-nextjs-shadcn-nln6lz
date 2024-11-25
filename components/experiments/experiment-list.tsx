import { Plus, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BountyItem } from './bounty-item';
import { Experiment } from './types';

interface ExperimentListProps {
  experiments: Experiment[];
}

export function ExperimentList({ experiments }: ExperimentListProps) {
  return (
    <div className="space-y-4">
      {experiments.map(exp => (
        <div key={exp.id} className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle 
              className={exp.status === 'completed' ? 'text-green-500' : 'text-muted-foreground'} 
            />
            <span className="font-semibold">{exp.name}</span>
            <span className={`ml-auto px-2 py-1 rounded text-sm ${
              exp.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
              exp.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
              'bg-secondary text-secondary-foreground'
            }`}>
              {exp.status}
            </span>
          </div>
          
          <div className="pl-6 space-y-2">
            {exp.bounties.map(bounty => (
              <BountyItem key={bounty.id} bounty={bounty} />
            ))}
            <Button variant="ghost" size="sm" className="text-primary">
              <Plus className="h-4 w-4 mr-1" /> Add Bounty
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}