'use client';

import React, { useState } from 'react';
import { Star, ChevronRight, Plus, BarChart2, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { initialData } from './data';

export default function DashboardPage() {
  const [goals] = useState(initialData.goals);
  
  const totalGoals = goals.length;
  const onTrackGoals = goals.filter(g => g.status === 'on-track').length;
  const averageProgress = Math.round(goals.reduce((acc, g) => acc + g.progress, 0) / totalGoals);
  
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Goals Dashboard</h1>
          <p className="text-gray-500 mt-1">Tracking {goals.length} active goals this quarter</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors">
          <Plus size={20} /> New Goal
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary rounded-lg">
                <TrendingUp size={24} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-primary font-medium">Total Progress</p>
                <p className="text-2xl font-bold">{averageProgress}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-600 rounded-lg">
                <BarChart2 size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">Goals On Track</p>
                <p className="text-2xl font-bold">{onTrackGoals}/{totalGoals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        {goals.map(goal => (
          <Card key={goal.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-muted border-b">
              <CardTitle className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xl font-bold">{goal.title}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{goal.quarter}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      goal.status === 'on-track' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {goal.status === 'on-track' ? 'On Track' : 'At Risk'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-secondary rounded-full">
                    <div 
                      className={`h-2 rounded-full ${
                        goal.status === 'on-track' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{goal.progress}%</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {goal.experiments.map(exp => (
                  <div 
                    key={exp.id} 
                    className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <ChevronRight size={20} className="text-muted-foreground" />
                      <div>
                        <p className="font-medium">{exp.title}</p>
                        <p className="text-sm text-muted-foreground">{exp.bountyCount} active bounties</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 bg-background px-3 py-1 rounded-full shadow-sm">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{exp.totalPoints}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}