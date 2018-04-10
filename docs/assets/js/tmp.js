console.log('tmp');

$.getJSON(
  'https://oerworldmap.org/resource.json?q=about.countryChampionFor%3A*&filter.about.@type=Organization',
  function(data){
    var items = [];
    $.each(data.member, function(key, val) {
      items.push('<li><a href="' + val.about.url + '">' + val.about.name[0]['@value'] + '</a></li>');
    });
    console.log(items.join("\n"));
  }
);