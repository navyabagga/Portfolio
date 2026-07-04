import { TimelineItem } from '../types';
import { localTimeline } from '../data/localProfile';

export async function getTimeline(): Promise<TimelineItem[]> {
  // Return hard-coded local timeline data
  return localTimeline;
}
