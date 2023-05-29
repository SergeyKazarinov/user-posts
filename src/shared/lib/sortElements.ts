import { ASC, DESC } from 'shared';
import { TSortValues } from 'types/post';

export const sortElements = <T>(
  array: T[],
  value: TSortValues,
  field: keyof T,
): T[] => {
  if (value === ASC) {
    return [...array].sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }
  if (value === DESC) {
    return [...array].sort((a, b) => (a[field] < b[field] ? 1 : -1));
  }
  return [...array];
};
