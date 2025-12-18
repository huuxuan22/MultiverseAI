import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/ui/Card';

function UserDetailPage() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Detail</h1>
      <Card>
        <p>User ID: {userId}</p>
        <p>More detailed user info would be loaded here.</p>
      </Card>
    </div>
  );
}

export default UserDetailPage;



