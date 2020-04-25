export class RevDetail {
  title: string
  rawInfo: string
  description: string

  constructor (title: string, rawInfo: string, description: string) {
    this.title = title
    this.rawInfo = rawInfo
    this.description = description
  }
}

export class Rev {
  id: string
  comment: string
  date: string
  url: string
}

export class Comment {
  rev: Rev
  details: RevDetail

  constructor (rev: Rev, detail: RevDetail) {
    this.rev = rev
    this.details = detail
  }
}
