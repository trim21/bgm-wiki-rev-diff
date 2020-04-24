import * as diffLib from 'difflib'
import * as Diff2Html from 'diff2html'
import * as $ from 'jquery'
import { request } from './utils'

function main () {
  console.log('start bgm wiki rev diff UserScript')
  initUI()
}

function initUI () {
  $('#pagehistory li').each(function () {
    const el = $(this)
    const rev = parseRevEl(el)
    el.prepend(`<input type="checkbox" class="rev-trim21-cn" name="rev" label="select to compare" value="${rev.id}">`)
  })
  $('#columnInSubjectA span.text').append('<a href="#;" id="compare-trim21-cn" tar class="l"> > 比较选中的版本</a>')
  $('#compare-trim21-cn').click(function () {
    const selectedRevs = getSelectedVersion()
    compare(selectedRevs)
  })
}

function getSelectedVersion () {
  const selectedVersion = []
  const selectedRev = $('.rev-trim21-cn:checked')
  if (selectedRev.length < 2) {
    window.alert('请选中两个版本进行比较')
  }
  if (selectedRev.length > 2) {
    window.alert('只能比较两个版本')
  }
  selectedRev.each(function () {
    const el = $(this)
    selectedVersion.push(el.val())
  })
  selectedVersion.reverse()
  return selectedVersion
}

function compare (revs) {
  console.log('compare')
  $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css" />')
  const rev1 = getRevInfo(revs[0])
  const rev2 = getRevInfo(revs[1])
  const p1 = request(rev1.url)
  const p2 = request(rev2.url)
  Promise.all([p1, p2]).then(values => {
    const contents = []
    for (const page of values) {
      const jq = $(page.responseText)
      contents.push(jq.find('#subject_infobox').val())
    }
    const d = diffLib.unifiedDiff(contents[0].split('\n'), contents[1].split('\n'), {
      fromfile: rev1.comment,
      tofile: rev2.comment,
      fromfiledate: rev1.date,
      tofiledate: rev2.date,
      lineterm: ''
    })
    const rendered = render(d.join('\n'), {})
    show(rendered)
  })
}

function getRevs () {
  const revs = []
  $('#pagehistory li').each(function () {
    const el = $(this)
    revs.push(parseRevEl(el))
  })
  return revs
}

function parseRevEl (el) {
  const date = el.find('a').first().html()
  const revEL = el.find('a.l:contains("恢复")')
  const revCommentEl = el.find('span.comment')
  let comment = ''
  if (revCommentEl.length) {
    comment = revCommentEl.html()
    comment = comment.substring(1, comment.length - 1)
  }
  const revHref = revEL.attr('href')
  const revID = revHref.split('/').pop()
  return {
    id: revID,
    comment,
    date,
    url: revHref,
  }
}

function getRevInfo (revID) {
  for (const rev of getRevs()) {
    if (rev.id === revID) {
      console.log(revID, rev)
      return rev
    }
  }
}

function render (diff) {
  return Diff2Html.html(diff)
}

function show (html) {
  const el = $('#show-trim21-cn')
  if (el.length) {
    el.html(html)
  } else {
    $('#columnInSubjectA').prepend('<div id=show-trim21-cn></dev>')
    show(html)
  }
}

main()
