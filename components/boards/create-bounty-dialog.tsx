'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useKanbanStore } from '@/lib/stores/kanban-store';
import { ExperimentSelect } from './experiment-select';

interface CreateBountyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FIBONACCI = [1, 2, 3, 5, 8, 13, 21];

export function CreateBountyDialog({ open, onOpenChange }: CreateBountyDialogProps) {
  const addBounty = useKanbanStore(state => state.addBounty);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    points: 3,
    labels: '',
    experimentId: ''
  });

  const handleSubmit = () => {
    addBounty({
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      points: formData.points,
      labels: formData.labels.split(',').map(l => l.trim()).filter(Boolean),
      status: 'todo',
      experimentId: formData.experimentId,
      assignee: null
    });
    onOpenChange(false);
    setFormData({
      title: '',
      description: '',
      points: 3,
      labels: '',
      experimentId: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Bounty</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Experiment</Label>
            <ExperimentSelect
              value={formData.experimentId}
              onValueChange={(value) => setFormData({...formData, experimentId: value})}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label>Points</Label>
            <div className="flex gap-2">
              {FIBONACCI.map(num => (
                <Button
                  key={num}
                  variant={formData.points === num ? 'default' : 'outline'}
                  className="flex items-center gap-1"
                  onClick={() => setFormData({...formData, points: num})}
                >
                  {num} <Star size={16} className={formData.points === num ? 'text-primary-foreground' : 'text-yellow-500 fill-yellow-500'} />
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Labels</Label>
            <Input
              placeholder="frontend, bug, feature (comma separated)"
              value={formData.labels}
              onChange={e => setFormData({...formData, labels: e.target.value})}
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              Create Bounty
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}