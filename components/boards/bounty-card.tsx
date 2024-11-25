'use client';

import { Star } from 'lucide-react';
import { useDraggable } from '@dnd-kit/core';
import { type Bounty } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface BountyCardProps {
  bounty: Bounty;
}

export function BountyCard({ bounty }: BountyCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: bounty.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "p-3 cursor-move hover:shadow-md transition-shadow",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{bounty.title}</h4>
        <div className="flex">
          {[...Array(bounty.points)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="text-yellow-500 fill-yellow-500" 
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {bounty.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 flex-wrap">
          {bounty.labels.map(label => (
            <Badge key={label} variant="secondary" className="text-xs">
              {label}
            </Badge>
          ))}
        </div>
        {bounty.assignee && (
          <Avatar className="h-6 w-6">
            <AvatarFallback>
              {bounty.assignee.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    </Card>
  );
}