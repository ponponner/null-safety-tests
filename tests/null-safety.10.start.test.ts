import { NullSafety } from 'null-safety';

const expectToBe = <TSource>(safety: NullSafety<TSource>, result: TSource) => {
  expect((safety as any).source).toBe(result);
  expect(safety.result()).toBe(result);
};

// ----------------------------------------------------------------------
// ジェネリック型変数についてのテスト
// Notice:
// - ジェネリック型変数については目視で確認する。
// ----------------------------------------------------------------------
const getTitle = (source: any) => `contains and returns ${source}`;

// return: NullSafety<string>
test(getTitle('abcdefg'), () => {
  const source = 'abcdefg';
  expectToBe(NullSafety.start(source), source);
});
// return: NullSafety<null>
test(getTitle(null), () => {
  const source = null;
  expectToBe(NullSafety.start(source), source);
});
// return: NullSafety<undefined>
test(getTitle(undefined), () => {
  const source = undefined;
  expectToBe(NullSafety.start(source), source);
});
