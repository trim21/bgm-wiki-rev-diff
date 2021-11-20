import * as Diff2Html from 'diff2html';
import * as $ from 'jquery';
import { OutputFormatType } from 'diff2html/lib/types';

import { configKey } from './config';

export async function render(diff: string): Promise<string> {
  let outputFormat = await GM.getValue<OutputFormatType>(configKey);
  if (!outputFormat) {
    outputFormat = 'line-by-line';
  }

  return Diff2Html.html(diff, { outputFormat: outputFormat });
}

export function show(html: string): void {
  $('#show-trim21-cn').html(html);
}

export function clear(): void {
  $('#show-trim21-cn').html('');
}
