import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useGetContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}
