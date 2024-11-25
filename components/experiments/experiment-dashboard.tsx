'use client';

import { useState } from 'react';
import { ExperimentCard } from './experiment-card';
import { initialData } from './data';

export function ExperimentDashboard() {
  const [projects] = useState(initialData);

  return (
    <div className="space-y-6">
      {projects.map(project => (
        <ExperimentCard key={project.id} project={project} />
      ))}
    </div>
  );
}