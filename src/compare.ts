import { getRevInfo, parseRevDetails } from './parser';
import { request } from './utils';
import { diff } from './differ';
import { clear, render, show } from './ui';
import { Comment } from './model';

export function compare(revID1: string, revID2: string): void {
  clear();
  show('<h2>loading versions...</h2>');
  const rev1 = getRevInfo(revID1);
  const rev2 = getRevInfo(revID2);
  if (!(rev1 && rev2)) {
    throw new Error(`error finding ${revID1}, ${revID2}`);
  }
  const p1 = request(rev1.url);
  const p2 = request(rev2.url);

  Promise.all([p1, p2])
    .then((values) => {
      const contents = [];
      for (const page of values) {
        contents.push(parseRevDetails(page));
      }
      const c1 = new Comment(rev1, contents[0]);
      const c2 = new Comment(rev2, contents[1]);
      const d = diff(c1, c2);
      const rendered = render(d);
      return show(rendered);
    })
    .catch(() => {
      show('<h2 style="color:red">loading versions error</h2>');
    });
}
