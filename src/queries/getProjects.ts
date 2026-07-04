// queries/getProjects.ts
import { Project } from '../types';
import { localProjects } from '../data/localProfile';

export async function getProjects(): Promise<Project[]> {
  // Return hard-coded local projects (previously fetched from DatoCMS)
  return localProjects;
}
