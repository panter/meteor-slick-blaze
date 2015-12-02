Package.describe({
  name: 'panter:slick-blaze',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds a template-helper for slick',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-slick-blaze',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['jquery','meteor-platform'], 'client');
  api.use('timbrandin:slick@1.5.8_2', 'client');
  api.addFiles('slick-blaze.html', 'client');
  api.addFiles('slick-blaze.js', 'client');
});

