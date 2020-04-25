import * as $ from 'jquery'
import { Rev, RevDetail } from './model'

export function parseRevDetails (html: string): RevDetail {
  const jq = $(html)
  const rawInfo = jq.find('#subject_infobox').val().toString()
  const title = jq.find('input[name="subject_title"]').val().toString()
  const description = jq.find('textarea#subject_summary').val().toString()
  return new RevDetail(title, rawInfo, description)
}

export function parseRevEl (el: JQuery): Rev {
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

function getRevs (): Rev[] {
  const revs: Rev[] = []
  $('#pagehistory li').each(function () {
    const el = $(this)
    revs.push(parseRevEl(el))
  })
  return revs
}

export function getRevInfo (revID: string): Rev {
  for (const rev of getRevs()) {
    if (rev.id === revID) {
      console.log(revID, rev)
      return rev
    }
  }
}
