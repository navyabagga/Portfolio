import { Certification } from '../types';
import { localCertifications } from '../data/localProfile';

export async function getCertifications(): Promise<Certification[]> {
  // Return hard-coded local certifications
  return localCertifications;
}
