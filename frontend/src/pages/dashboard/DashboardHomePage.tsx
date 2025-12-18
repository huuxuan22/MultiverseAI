import React from 'react';
import Card from '../../components/ui/Card';

function DashboardHomePage() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <Card>
                <p className="text-sm text-slate-200">Overview metrics will go here.</p>
            </Card>
        </div>
    );
}

export default DashboardHomePage;


