import { NullSafety } from 'null-safety';

// ----------------------------------------------------------------------
// ジェネリック型変数についてのテスト
// Notice:
// - 戻り値の型については目視で確認する。
// ----------------------------------------------------------------------
const getTitle = (source: any) => `returns ${source}`;

// return: string | null | undefined
test(getTitle('abcdefg'), () => {
  const source = 'abcdefg';
  expect(NullSafety.start(source).result()).toBe(source);
});
// return: null | undefined
test(getTitle(null), () => {
  const source = null;
  expect(NullSafety.start(source).result()).toBe(source);
});
// return: null | undefined
test(getTitle(undefined), () => {
  const source = undefined;
  expect(NullSafety.start(source).result()).toBe(source);
});
