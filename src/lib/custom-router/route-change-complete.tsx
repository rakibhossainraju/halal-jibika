import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { onComplete } from './events';

export function HandleOnComplete() {
  return (
    <Suspense>
      <HandleOnCompleteChild />
    </Suspense>
  );
}

function HandleOnCompleteChild() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => onComplete(), [pathname, searchParams]);
  return null;
}
