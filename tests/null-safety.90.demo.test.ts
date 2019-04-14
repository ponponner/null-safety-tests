import { NullSafety } from 'null-safety';
import { JSDOM } from 'jsdom';

const htmlA = `
<html>
  <h1>page-a</h1>
</html>
`;
const htmlB = `
<html>
  <h3>page-b</h3>
</html>
`;

interface ITextFetched {
  isSucceeded: boolean;
  text: string;
}

const fetchTitle = (html: string): ITextFetched => {
  const doc = new JSDOM(html).window.document;
  const title = NullSafety.start(doc)
    .next(o => o.querySelector('h1'))
    .next(o => o.textContent);
  return {
    isSucceeded: title.result() != null,
    text: title.resultAlty('title-unfetched'),
  };
};

test(`fetch title-text: page-a`, () => {
  expect(fetchTitle(htmlA).text).toBe('page-a');
});
test(`unfetched title-text: page-b`, () => {
  expect(fetchTitle(htmlB).text).toBe('title-unfetched');
});
