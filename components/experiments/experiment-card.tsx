import { ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExperimentList } from './experiment-list';
import { MeasuresList } from './measures-list';
import { Project } from './types';

interface ExperimentCardProps {
  project: Project;
}

export function ExperimentCard({ project }: ExperimentCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{project.goal}</span>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown className="h-5 w-5" />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Experiments & Bounties</h3>
            <ExperimentList experiments={project.experiments} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Measures</h3>
            <MeasuresList measures={project.measures} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}