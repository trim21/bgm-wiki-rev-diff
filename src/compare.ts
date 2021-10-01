import { getRevInfo, parseRevDetails } from './parser';
import { diff } from './differ';
import { clear, render, show } from './ui';
import { Commit, Rev } from './model';

export function compare(revID1: string, revID2: string): void {
  clear();
  show('<h2>loading versions...</h2>');
  const rev1 = getRevInfo(revID1);
  const rev2 = getRevInfo(revID2);
  if (!rev1) {
    throw new Error(`error finding ${revID1}`);
  }
  const ps: Array<Promise<Commit>> = [fetchRev(rev1), fetchRev(rev2)];

  Promise.all(ps)
    .then((values) => {
      const d = diff(values[1], values[0]);
      const rendered = render(d);
      return show(rendered);
    })
    .catch((e) => {
      console.log(e);
      show('<h2 style="color:red">loading versions error</h2>');
    })
    .finally(() => {
      document.getElementById('show-trim21-cn')?.scrollIntoView({
        behavior: 'smooth',
      });
    });
}

const _cache: Record<string, Commit> = {};

async function fetchRev(rev: Rev | undefined): Promise<Commit> {
  if (!rev) {
    return new Commit(
      {
        id: '0',
        comment: '',
        date: '',
        url: '',
      },
      {
        title: '',
        rawInfo: '',
        description: '',
      },
    );
  }

  if (!_cache[rev.id]) {
    const res = await fetch(rev.url);
    _cache[rev.id] = new Commit(rev, parseRevDetails(await res.text()));
  }

  return _cache[rev.id];
}
