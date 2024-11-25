export interface Bounty {
  id: number;
  title: string;
  description: string;
  points: number;
  assignee: string | null;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  labels: string[];
  experimentId: string;
}

export interface Experiment {
  id: string;
  title: string;
  status: string;
  goal: string;
}