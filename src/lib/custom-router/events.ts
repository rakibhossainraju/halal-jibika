'use client';
import NProgress from 'nprogress';
import { logInfo, logSuccess } from '../log';

let inProgress = false;

export function onStart() {
  if (inProgress) return;
  inProgress = true;
  logInfo('NProgress started');
  NProgress.start();
}

export function configureNProgress(options?: Partial<Parameters<typeof NProgress.configure>[0]>) {
  if (options) NProgress.configure(options);
}

export function onComplete() {
  if (!inProgress) return;
  logSuccess('NProgress completed');
  NProgress.done();
  inProgress = false;
}
