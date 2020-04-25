import * as Diff2Html from 'diff2html'
import * as $ from 'jquery'

export function render (diff: string) {
  // @ts-ignore https://github.com/rtfpessoa/diff2html/issues/320
  return Diff2Html.html(diff)
}

export function show (html: string) {
  $('#show-trim21-cn').html(html)
}

export function clear () {
  $('#show-trim21-cn').html('')
}
