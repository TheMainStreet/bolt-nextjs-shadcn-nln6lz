'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useKanbanStore } from '@/lib/stores/kanban-store';

interface ExperimentSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
}

export function ExperimentSelect({ value, onValueChange }: ExperimentSelectProps) {
  const experiments = useKanbanStore(state => state.experiments);
  const selectedExperiment = useKanbanStore(state => state.selectedExperiment);
  const setSelectedExperiment = useKanbanStore(state => state.setSelectedExperiment);

  const handleChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setSelectedExperiment(newValue);
    }
  };

  return (
    <Select value={value ?? selectedExperiment} onValueChange={handleChange}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="All Experiments" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="">All Experiments</SelectItem>
        {experiments.map(exp => (
          <SelectItem key={exp.id} value={exp.id}>
            {exp.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}