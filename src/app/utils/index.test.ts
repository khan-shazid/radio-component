import { formatwithComma } from './index';

test('formatwithComma basic testing', () => {
  expect(formatwithComma('1222')).toBe('122,2');
});

test('formatwithComma with one length', () => {
  expect(formatwithComma('1')).toBe('1');
});

test('formatwithComma with no length', () => {
  expect(formatwithComma('')).toBe('');
});

test('formatwithComma with undefined', () => {
  expect(formatwithComma(undefined)).toBe('');
});
