import React from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

function RegisterPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: add real register logic
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-1">Create account</h1>
        <p className="text-xs text-slate-400">Just a simple example, no real backend.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input label="Name" name="name" required />
        <Input label="Email" type="email" name="email" required />
        <Input label="Password" type="password" name="password" required />
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;


