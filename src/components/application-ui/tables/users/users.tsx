import { useCallback, useEffect, useState } from 'react';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { User, usersApi } from 'src/mocks/users';
import Results from './results';

function Component() {
  const isMountedRef = useRefMounted();
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const response = await usersApi.getUsers();

      if (isMountedRef()) {
        setUsers(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return <Results users={users} />;
}

export default Component;
