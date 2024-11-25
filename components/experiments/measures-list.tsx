import { Measure } from './types';

interface MeasuresListProps {
  measures: Measure[];
}

export function MeasuresList({ measures }: MeasuresListProps) {
  return (
    <div className="space-y-2">
      {measures.map(measure => (
        <div key={measure.id} className="p-2 bg-muted rounded">
          <div className="flex justify-between mb-1">
            <span>{measure.name}</span>
            <span className={`px-2 py-1 rounded-full text-sm ${
              measure.status === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
              measure.status === 'yellow' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            }`}>
              {measure.current} / {measure.target}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}