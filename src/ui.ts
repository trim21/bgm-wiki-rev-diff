import * as Diff2Html from 'diff2html';
import * as $ from 'jquery';

export function render(diff: string): string {
  return Diff2Html.html(diff);
}

export function show(html: string): void {
  $('#show-trim21-cn').html(html);
}

export function clear(): void {
  $('#show-trim21-cn').html('');
}
