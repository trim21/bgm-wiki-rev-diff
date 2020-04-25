const pkg = require('../package.json')

module.exports = {
  name: pkg.name,
  namespace: 'https://trim21.me/',
  version: pkg.version,
  author: pkg.author,
  source: pkg.repository.url,
  license: 'MIT',
  match: [
    'https://bgm.tv/subject/*/edit',
    'https://bangumi.tv/subject/*/edit'
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${pkg.dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/diff2html@${pkg.dependencies.diff2html}/bundles/js/diff2html.min.js`,
    `https://cdn.jsdelivr.net/npm/diff@${pkg.dependencies.diff}/dist/diff.min.js`,
  ],
  grant: [
    'GM_xmlhttpRequest'
  ],
  connect: [
    'bgm.tv',
    'bangumi.tv'
  ],
  'run-at': 'document-end'
}
