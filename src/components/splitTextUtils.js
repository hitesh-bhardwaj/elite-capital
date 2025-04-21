/* eslint-disable no-inner-declarations */

import SplitType from 'split-type';

export function SplitInWord(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'words',
  });
}
export function SplitInChar(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'chars',
  });
}