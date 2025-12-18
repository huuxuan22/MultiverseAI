import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

function HomePage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-1">Welcome to Multiverse</h1>
        <p className="text-slate-300 text-sm">A starter layout with React Router v6 & Tailwind CSS.</p>
      </div>
      <Card>
        <p className="mb-3 text-sm text-slate-200">This is the public landing page.</p>
        <Button to="/login">Go to Login</Button>
      </Card>
    </div>
  );
}

export default HomePage;


