import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: add real auth logic
    navigate('/app');
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight mb-1">Sign in</h1>
        <p className="text-xs text-slate-400">Use any email/password for this demo.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input label="Email" type="email" name="email" required />
        <Input label="Password" type="password" name="password" required />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;


