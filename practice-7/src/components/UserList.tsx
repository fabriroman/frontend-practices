import { useEffect, useState } from 'react';

type UserProps = {
    id: number;
    name: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          setUsers(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching users:', error);
          setLoading(false);
        }
      }, 1000);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map((user: UserProps) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
