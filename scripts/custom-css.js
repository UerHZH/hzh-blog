hexo.extend.filter.register('theme_inject', function(injects) {
  injects.head.raw('custom-css', '<link rel="stylesheet" href="/css/custom.css">', {cache: true});
});
