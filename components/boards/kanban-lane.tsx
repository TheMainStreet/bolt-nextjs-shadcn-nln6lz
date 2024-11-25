'use client';

import { useDroppable } from '@dnd-kit/core';
import { BountyCard } from './bounty-card';
import { type Bounty } from '@/lib/types';

interface KanbanLaneProps {
  id: string;
  title: string;
  bounties: Bounty[];
  onBountyClick: (id: number) => void;
}

export function KanbanLane({ id, title, bounties, onBountyClick }: KanbanLaneProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className="flex-1 min-w-[300px]">
      <div 
        ref={setNodeRef}
        className="bg-muted rounded-lg p-4 h-full"
      >
        <h3 className="font-medium mb-4 flex justify-between items-center">
          {title}
          <span className="text-sm text-muted-foreground">
            {bounties.length}
          </span>
        </h3>
        <div className="space-y-3">
          {bounties.map(bounty => (
            <div 
              key={bounty.id}
              onClick={() => onBountyClick(bounty.id)}
            >
              <BountyCard bounty={bounty} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}