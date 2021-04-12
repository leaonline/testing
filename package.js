/* eslint-env meteor */
Package.describe({
  name: 'leaonline:testing',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Generic test helpers for all our projects',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:leaonline/testing.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  // this package will only be added in tests
  testOnly: true
})

Package.onUse(function (api) {
  api.versionsFrom('1.6')
  api.use('ecmascript')
  api.mainModule('testing.js')
})
