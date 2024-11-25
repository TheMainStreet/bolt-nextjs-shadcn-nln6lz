export interface Bounty {
  id: number;
  title: string;
  points: number;
  assignee: string | null;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Experiment {
  id: number;
  name: string;
  status: 'completed' | 'in-progress' | 'planned';
  bounties: Bounty[];
}

export interface Measure {
  id: number;
  name: string;
  target: string;
  current: string;
  status: 'green' | 'yellow' | 'red';
}

export interface Project {
  id: number;
  goal: string;
  experiments: Experiment[];
  measures: Measure[];
}