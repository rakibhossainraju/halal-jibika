import NextLink from 'next/link';
import React, { forwardRef, startTransition } from 'react';

import { onStart } from '../events';
import { shouldTriggerStartEvent } from './should-trigger-start-event';

type NextLinkProps = React.ComponentProps<typeof NextLink>;
type AnchorProps = React.ComponentProps<'a'>;
type Props = AnchorProps & Partial<NextLinkProps>;

export const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href, onClick, ...rest },
  ref,
) {
  const isStringHref = typeof href === 'string';
  const isRelativeNoScheme = isStringHref && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(href as string);
  const useLink =
    href != null && (!isStringHref || (href as string).startsWith('/') || isRelativeNoScheme);

  if (!useLink) {
    const anchorProps: AnchorProps = {
      href: href as AnchorProps['href'],
      onClick,
      ...rest,
    } as AnchorProps;
    return <a {...anchorProps} ref={ref} />;
  }

  const nextProps = rest as Omit<NextLinkProps, 'href' | 'onClick' | 'ref'>;
  return (
    <NextLink
      href={href as NextLinkProps['href']}
      onClick={(event) => {
        startTransition(() => {
          if (shouldTriggerStartEvent(String((href as any) ?? ''), event)) onStart();
          if (onClick) onClick(event as any);
        });
      }}
      {...nextProps}
      ref={ref as any}
    />
  );
});
