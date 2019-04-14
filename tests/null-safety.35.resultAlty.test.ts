import { NullSafety } from 'null-safety';

const strAltResult = 'string-alt-result';

// ----------------------------------------------------------------------
// ジェネリック型変数についてのテスト
// Notice:
// - 戻り値の型については目視で確認する。
// ----------------------------------------------------------------------
const getTitle = (source: any) => `returns ${source}`;

// return: string
test(getTitle('abcdefg'), () => {
  const source = 'abcdefg';
  expect(NullSafety.start(source).resultAlty(strAltResult)).toBe(source);
});
test(getTitle(null), () => {
  const source = null;
  expect(NullSafety.start<string>(source).resultAlty(strAltResult)).toBe(
    strAltResult
  );
});
test(getTitle(undefined), () => {
  const source = undefined;
  expect(NullSafety.start<string>(source).resultAlty(strAltResult)).toBe(
    strAltResult
  );
});
