import { create } from 'zustand';
import { type Bounty, type Experiment } from '@/lib/types';

interface KanbanState {
  experiments: Experiment[];
  bounties: Bounty[];
  selectedExperiment: string;
  setSelectedExperiment: (id: string) => void;
  addBounty: (bounty: Bounty) => void;
  updateBounty: (id: number, updates: Partial<Bounty>) => void;
}

export const useKanbanStore = create<KanbanState>((set) => ({
  experiments: [
    {
      id: '1',
      title: 'SSO Integration',
      status: 'in-progress',
      goal: 'Enterprise Adoption'
    },
    {
      id: '2',
      title: 'SOC2 Certification',
      status: 'planned',
      goal: 'Enterprise Adoption'
    }
  ],
  bounties: [
    {
      id: 1,
      title: 'Design SSO Architecture',
      description: 'Create technical design doc for SSO implementation',
      points: 8,
      assignee: 'Sarah Chen',
      status: 'in-progress',
      labels: ['design', 'security'],
      experimentId: '1'
    },
    {
      id: 2,
      title: 'Build OAuth Flow',
      description: 'Implement OAuth2.0 authentication pipeline',
      points: 13,
      assignee: null,
      status: 'todo',
      labels: ['backend', 'security'],
      experimentId: '1'
    },
    {
      id: 3,
      title: 'Document Security Procedures',
      description: 'Create comprehensive security documentation',
      points: 5,
      assignee: 'Mike Rogers',
      status: 'done',
      labels: ['documentation'],
      experimentId: '2'
    }
  ],
  selectedExperiment: '',
  setSelectedExperiment: (id) => set({ selectedExperiment: id }),
  addBounty: (bounty) => set((state) => ({ 
    bounties: [...state.bounties, bounty] 
  })),
  updateBounty: (id, updates) => set((state) => ({
    bounties: state.bounties.map(b => 
      b.id === id ? { ...b, ...updates } : b
    )
  }))
}));