'use client';

import { ExperimentDashboard } from '@/components/experiments/experiment-dashboard';
import { PageHeader } from '@/components/experiments/page-header';

export default function ExperimentsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <PageHeader />
      <ExperimentDashboard />
    </div>
  );
}