import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  try {
    const { data, headers } = await api.get('users', {
      params: {
        page,
      },
    });

    const totalCount = Number(headers['x-total-count']);

    const users = data.users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }));

    return { users, totalCount };
  } catch (err) {
    console.error(err.message);
    return;
  }
}

export function useUsers(
  page: number,
  options: UseQueryOptions<User[], any, GetUsersResponse>
) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  });
}
