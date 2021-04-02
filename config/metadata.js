const {
  author,
  dependencies,
  name,
  repository,
  version,
} = require('../package.json')

module.exports = {
  name: name,
  namespace: 'https://trim21.me/',
  version: version,
  author: author,
  source: repository.url,
  supportURL: repository.url + '/issues',
  license: 'MIT',
  match: [
    'https://bgm.tv/subject/*/edit',
    'https://bangumi.tv/subject/*/edit',
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/diff2html@${dependencies.diff2html}/bundles/js/diff2html.min.js`,
    `https://cdn.jsdelivr.net/npm/axios@${dependencies.axios}/dist/axios.min.js`,
    `https://cdn.jsdelivr.net/npm/diff@${dependencies.diff}/dist/diff.min.js`,
  ],
  connect: [
    'bgm.tv',
    'bangumi.tv',
  ],
  'run-at': 'document-end',
}
