'use client';

import { useEffect, useState } from 'react';
import { Star, User } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useKanbanStore } from '@/lib/stores/kanban-store';
import { ExperimentSelect } from './experiment-select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';

interface BountyDialogProps {
  bountyId: number | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FIBONACCI = [1, 2, 3, 5, 8, 13, 21];

export function BountyDialog({ bountyId, open, onOpenChange }: BountyDialogProps) {
  const bounty = useKanbanStore(state => 
    state.bounties.find(b => b.id === bountyId)
  );
  const updateBounty = useKanbanStore(state => state.updateBounty);
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    points: 3,
    labels: '',
    experimentId: '',
    assignee: ''
  });

  useEffect(() => {
    if (bounty) {
      setFormData({
        title: bounty.title,
        description: bounty.description,
        points: bounty.points,
        labels: bounty.labels.join(', '),
        experimentId: bounty.experimentId,
        assignee: bounty.assignee || ''
      });
    }
  }, [bounty]);

  const handleSave = () => {
    if (!bountyId) return;

    updateBounty(bountyId, {
      title: formData.title,
      description: formData.description,
      points: formData.points,
      labels: formData.labels.split(',').map(l => l.trim()).filter(Boolean),
      experimentId: formData.experimentId,
      assignee: formData.assignee || null
    });

    setIsEditing(false);
    toast.success('Bounty updated successfully');
  };

  if (!bounty) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <div className="space-y-4">
          {isEditing ? (
            <>
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

              <div className="space-y-2">
                <Label>Experiment</Label>
                <ExperimentSelect
                  value={formData.experimentId}
                  onValueChange={(value) => setFormData({...formData, experimentId: value})}
                />
              </div>

              <div className="space-y-2">
                <Label>Assignee</Label>
                <Input
                  placeholder="Full name"
                  value={formData.assignee}
                  onChange={e => setFormData({...formData, assignee: e.target.value})}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  Save Changes
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold">{bounty.title}</h2>
                  <p className="text-sm text-muted-foreground">in {bounty.status}</p>
                </div>
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              </div>

              <div className="flex items-center gap-2">
                {[...Array(bounty.points)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="text-yellow-500 fill-yellow-500" 
                  />
                ))}
                <span className="text-sm text-muted-foreground">
                  {bounty.points} points
                </span>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Description</Label>
                <p className="text-sm">{bounty.description}</p>
              </div>

              <div className="space-y-2">
                <Label>Labels</Label>
                <div className="flex gap-1 flex-wrap">
                  {bounty.labels.map(label => (
                    <Badge key={label} variant="secondary">
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Assignee</Label>
                <div className="flex items-center gap-2">
                  {bounty.assignee ? (
                    <>
                      <Avatar>
                        <AvatarFallback>
                          {bounty.assignee.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span>{bounty.assignee}</span>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User size={20} />
                      <span>Unassigned</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}