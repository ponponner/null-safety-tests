import { NullSafety } from 'null-safety';

const expectToBe = <TSource>(safety: NullSafety<TSource>, result: TSource) => {
  expect((safety as any).source).toBe(result);
  expect(safety.result()).toBe(result);
};

const getter = (
  source: string | null | undefined
): string | null | undefined => {
  return source + '-gettered';
};

// ----------------------------------------------------------------------
// ジェネリック型変数についてのテスト
// Notice:
// - ジェネリック型変数については目視で確認する。
// ----------------------------------------------------------------------
const getTitle = (source: string) => `contains & returns ${getter(source)}`;

// o: string
// return: NullSafety<string>
test(getTitle('abcdefg'), () => {
  const source = 'abcdefg';
  const safety = NullSafety.start(source).nextWithAny(o => getter(o));
  expectToBe(safety, getter(source));
});
