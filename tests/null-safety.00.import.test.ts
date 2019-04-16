import { NullSafety } from 'null-safety';

test('test import null-safety', () => {
  const source = 'abcdefg';
  const actual = NullSafety.start(source).result();
  const expected = source;
  expect(actual).toBe(expected);
});
