
import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';

interface UseFuseOptions<T> {
  keys: string[];
  threshold?: number;
  includeScore?: boolean;
}

export function useFuse<T>(
  data: T[],
  options: UseFuseOptions<T>
) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: options.keys,
      threshold: options.threshold || 0.3,
      includeScore: options.includeScore || false,
    });
  }, [data, options]);

  const results = useMemo(() => {
    if (!query) return data;
    return fuse.search(query).map(result => result.item);
  }, [fuse, query, data]);

  return {
    query,
    setQuery,
    results,
  };
}
