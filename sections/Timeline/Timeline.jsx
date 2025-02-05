import React from 'react';
import { Timeline } from './TimelineDemo';

export const TimelineDemo = () => {
  // const currentDate = new Date('2025-02-05 12:02:19');

  const data = [
    {
      title: 'Registration Starts',
      date: '2025-02-05',
      description: 'Begin your journey by registering your team for the Altair optimization challenge.',
      status: 'current',
    },
    {
      title: 'Registration Ends',
      date: '2025-03-10',
      description: 'Last date to register. Make sure to complete your registration before the deadline.',
      status: 'upcoming',
    },
    {
      title: 'Submission Deadline',
      date: '2025-03-17',
      description: 'Last day to submit your submission. Try not to miss the deadline.',
      status: 'upcoming',
    },
    {
      title: 'Result Announcement',
      date: '2025-03-24',
      description: 'The Altair Optimization Challenge winners will be revealed.',
      status: 'tentative',
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};
