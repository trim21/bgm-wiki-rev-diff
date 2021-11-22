import * as Diff2Html from 'diff2html';
import * as $ from 'jquery';
import { OutputFormatType } from 'diff2html/lib/types';

import { configKey } from './config';
import { Commit } from './model';
import { diff } from './differ';

export async function render(revOld: Commit, revNew: Commit): Promise<string> {
  let outputFormat = await GM.getValue<OutputFormatType>(configKey);
  if (!outputFormat) {
    outputFormat = 'line-by-line';
  }

  const patch = diff(revOld, revNew, outputFormat);

  const html = Diff2Html.html(patch, { outputFormat: outputFormat });
  const elID = `show-diff-view-${outputFormat}`;

  show('');
  $(`#${elID}`).html(html);

  document.getElementById(elID)?.scrollIntoView({
    behavior: 'smooth',
  });
}

export function show(html: string): void {
  $('#show-diff-info').html(html);
}

export function clear(): void {
  $('#show-diff-view-line-by-line').html('');
  $('#show-diff-view-side-by-side').html('');
  show('');
}
