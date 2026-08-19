import type { MouseEvent } from 'react';

export const rejectIframeNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
  if (window.self !== window.top) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
};