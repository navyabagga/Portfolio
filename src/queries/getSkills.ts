import { Skill } from '../types';
import { localSkills } from '../data/localProfile';

export async function getSkills(): Promise<Skill[]> {
  // Return hard-coded local skills (previously fetched from DatoCMS)
  return localSkills;
}
