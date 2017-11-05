var search = instantsearch({
  appId: '2IJ47E8O3O',
  apiKey: '317f8602b338e951292e73e50bef9e74',
  indexName: 'medicine',
});

search.addWidget(instantsearch.widgets.hits({
  container: document.querySelector('#medicine'),
  templates: {
    item: '{{{_highlightResult.name.value}}}'
  },
}));

search.addWidget(instantsearch.widgets.searchBox({
  container: document.querySelector('#searchBox'),
  placeholder: 'Symptoms',
}));

search.start();
