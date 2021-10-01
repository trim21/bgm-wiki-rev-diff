import * as Diff from 'diff';

import { Commit } from './model';

export function diff(revOld: Commit, revNew: Commit): string {
  return [
    titleDiff(revOld, revNew),
    infoDiff(revOld, revNew),
    descriptionDiff(revOld, revNew),
  ].join('\n');
}

function titleDiff(rev1: Commit, rev2: Commit): string {
  if (rev1.details.title === rev2.details.title) {
    return '';
  }
  return Diff.createPatch(
    '条目名',
    rev1.details.title,
    rev2.details.title,
    rev1.rev.date,
    rev2.rev.date,
  );
}

function infoDiff(rev1: Commit, rev2: Commit): string {
  if (rev1.details.rawInfo === rev2.details.rawInfo) {
    return '';
  }
  return Diff.createPatch(
    '相关信息',
    rev1.details.rawInfo,
    rev2.details.rawInfo,
    rev1.rev.date,
    rev2.rev.date,
  );
}

function descriptionDiff(rev1: Commit, rev2: Commit): string {
  if (rev1.details.description === rev2.details.description) {
    return '';
  }
  return Diff.createPatch(
    '简介',
    rev1.details.description,
    rev2.details.description,
    rev1.rev.date,
    rev2.rev.date,
  );
}
