import { useEffect } from 'react';
import { useApp } from '@lyttledev-dashboard/contexts/App.context';

export function usePage(path: string): string {
  const app = useApp();
  const title = 'Home';

  // Set selected guild id from router, on initial load
  useEffect(() => {
    app?.setPageTitle(title);
  }, []);

  return title;
}
