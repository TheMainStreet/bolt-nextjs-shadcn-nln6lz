'use client';

import { BoardHeader } from '@/components/boards/board-header';
import { KanbanBoard } from '@/components/boards/kanban-board';

export default function BoardsPage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <BoardHeader />
      <KanbanBoard />
    </div>
  );
}