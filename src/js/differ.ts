import * as Diff from 'diff'
import { Comment } from './model'

export function diff (rev1: Comment, rev2: Comment): string {
  return `${titleDiff(rev1, rev2)}\n${infoDiff(rev1, rev2)}\n${descriptionDiff(rev1, rev2)}`
}

function titleDiff (rev1: Comment, rev2: Comment): string {
  if (rev1.details.title === rev2.details.title) {
    return ''
  }
  return Diff.createTwoFilesPatch(
    'title',
    'title',
    rev1.details.title,
    rev2.details.title,
    rev1.rev.date,
    rev2.rev.date,
  )
}

function infoDiff (rev1: Comment, rev2: Comment): string {
  if (rev1.details.rawInfo === rev2.details.rawInfo) {
    return ''
  }
  return Diff.createTwoFilesPatch(
    'info',
    'info',
    rev1.details.rawInfo,
    rev2.details.rawInfo,
    rev1.rev.date,
    rev2.rev.date,
  )
}

function descriptionDiff (rev1: Comment, rev2: Comment): string {
  if (rev1.details.description === rev2.details.description) {
    return ''
  }
  return Diff.createTwoFilesPatch(
    'description',
    'description',
    rev1.details.description,
    rev2.details.description,
    rev1.rev.date,
    rev2.rev.date,
  )
}
