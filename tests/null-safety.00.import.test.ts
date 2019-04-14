import { NullSafety } from 'null-safety';

const expectToBe = <TSource>(safety: NullSafety<TSource>, result: TSource) => {
  expect((safety as any).source).toBe(result);
  expect(safety.result()).toBe(result);
};

// ----------------------------------------------------------------------
// importおよびビルドについてのテスト
// ----------------------------------------------------------------------
const getTitle = (source: any) => `contains and returns ${source}`;

test(getTitle('abcdefg'), () => {
  const source = 'abcdefg';
  expectToBe(NullSafety.start(source), source);
});
