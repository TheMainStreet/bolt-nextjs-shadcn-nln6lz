'use client';

import { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, closestCorners } from '@dnd-kit/core';
import { KanbanLane } from './kanban-lane';
import { useKanbanStore } from '@/lib/stores/kanban-store';
import { BountyCard } from './bounty-card';
import { BountyDialog } from './bounty-dialog';

const LANES = [
  { id: 'todo', title: 'Todo' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'review', title: 'Review' },
  { id: 'done', title: 'Done' }
];

export function KanbanBoard() {
  const bounties = useKanbanStore(state => state.bounties);
  const updateBounty = useKanbanStore(state => state.updateBounty);
  const selectedExperiment = useKanbanStore(state => state.selectedExperiment);
  
  const [activeBounty, setActiveBounty] = useState<number | null>(null);
  const [selectedBounty, setSelectedBounty] = useState<number | null>(null);

  const filteredBounties = selectedExperiment
    ? bounties.filter(b => b.experimentId === selectedExperiment)
    : bounties;

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveBounty(Number(active.id));
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const bountyId = Number(active.id);
      const newStatus = String(over.id);
      
      updateBounty(bountyId, { status: newStatus });
    }
    
    setActiveBounty(null);
  }

  const draggedBounty = activeBounty ? bounties.find(b => b.id === activeBounty) : null;

  return (
    <>
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto pb-6">
          {LANES.map(lane => (
            <KanbanLane
              key={lane.id}
              id={lane.id}
              title={lane.title}
              bounties={filteredBounties.filter(b => b.status === lane.id)}
              onBountyClick={setSelectedBounty}
            />
          ))}
        </div>

        <DragOverlay>
          {draggedBounty && (
            <div className="w-[300px]">
              <BountyCard bounty={draggedBounty} />
            </div>
          )}
        </DragOverlay>
      </DndContext>

      <BountyDialog
        bountyId={selectedBounty}
        open={selectedBounty !== null}
        onOpenChange={(open) => !open && setSelectedBounty(null)}
      />
    </>
  );
}