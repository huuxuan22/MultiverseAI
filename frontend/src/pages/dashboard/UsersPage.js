import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';

const MOCK_USERS = [
  { id: '1', name: 'Alice Doe' },
  { id: '2', name: 'Bob Smith' }
];

function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <Card>
        <ul>
          {MOCK_USERS.map((user) => (
            <li key={user.id}>
              <Link to={`/app/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default UsersPage;



