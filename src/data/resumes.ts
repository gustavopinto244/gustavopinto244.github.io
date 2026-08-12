import type { Resume } from '../types';

/**
 * Resumes, one per area of focus.
 *
 * To publish one: put the PDF in `public/resumes/`, set `file` to its path
 * (starting at `/resumes/`, matching the filename on disk exactly) and bump
 * `updatedAt`. While `file` is missing the card renders as "em breve" instead
 * of a broken link.
 */
export const resumes: Resume[] = [
  {
    area: 'development',
    file: '/resumes/gustavo-pinto-development.pdf',
    updatedAt: '2026-08',
  },
  {
    area: 'security-infra',
    file: '/resumes/gustavo-pinto-security-infra.pdf',
    updatedAt: '2026-08',
  },
  {
    area: 'automation-data',
    // file: '/resumes/gustavo-pinto-automation-data.pdf',
    updatedAt: '2026-08',
  },
];
