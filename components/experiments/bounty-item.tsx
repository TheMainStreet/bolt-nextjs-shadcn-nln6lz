import { Award } from 'lucide-react';
import { Bounty } from './types';

interface BountyItemProps {
  bounty: Bounty;
}

export function BountyItem({ bounty }: BountyItemProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-muted rounded">
      <Award className="h-4 w-4 text-yellow-500" />
      <div className="flex-grow">
        <div>{bounty.title}</div>
        <div className="text-sm text-muted-foreground">
          {bounty.assignee || 'Unassigned'}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 rounded-full text-sm">
          {bounty.points} pts
        </span>
        <span className={`px-2 py-1 rounded text-sm ${
          bounty.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
          bounty.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
          'bg-secondary text-secondary-foreground'
        }`}>
          {bounty.status}
        </span>
      </div>
    </div>
  );
}