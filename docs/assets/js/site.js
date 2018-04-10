var selectHref = (function(){

  function init() {
    $('[data-select-href]').each(function(){
      init_one(this);
    });
  }

  function init_one(one) {
    $select = $(one).find('select');
    $a = $(one).find('a');
    $select.on('change', function(){
      update($select, $a);
    });
    update($select, $a);
  }

  function update($select, $a) {
    $a[0].href = $select.val();
  }

  return {
    init : init
  };

})();


var animateScrollToFragment = (function(){

  var additional_offset = 0;

  function init() {
    $('[data-animate-scroll-to-fragment]').each(function(){
      init_one(this);
    });
  }

  function init_one(one) {
    $(one).click(function(){
  		$('html, body').animate({
  			scrollTop : $('#' + one.href.split('#')[1]).offset().top - additional_offset
  		}, 1000);
    });
  }

  return {
    init : init
  };

})();


var injectStats = (function(){

  const icons = {
    'Organization': 'users',
    'Service': 'desktop',
    'Action': 'gears',
    'Person': 'user',
    'Event': 'calendar',
    'Article': 'comment',
    'WebPage': 'book',
    'Product': 'folder'
  }

  const labels = {
    'Organization': 'Organizations',
    'Service': 'Services',
    'Action': 'Projects',
    'Person': 'People',
    'Event': 'Events',
    'Article': 'Stories',
    'WebPage': 'Publications',
    'Product': 'Tools'
  }

  var resource;

  function render_one(one) {
      var template = $(one).find('[data-inject-stats-template]').html();
      var html = '';
      resource.aggregations['about.@type'].buckets.map(function(bucket){
        html += Mustache.render(template, {
          key: bucket.key,
          icon: icons[bucket.key],
          label: labels[bucket.key],
          count: bucket.doc_count
        });
      });
      $(one).html(html);
  }

  function render() {
    $('[data-inject-stats]').each(function(){
      render_one(this);
    });
  }

  function init() {
    var url;

    if(ENVIRONMENT == 'development') {
      url = 'https://oerworldmap.org/resource.json?size=0';
    } else if(ENVIRONMENT == 'production') {
      url = '/resource.json?size=0';
    }

    $.getJSON(url, function (data){
      resource = data;
      render();
    });
  }

  return {
    init : init
  };

})();


$(function(){

  selectHref.init();
  animateScrollToFragment.init();
  injectStats.init();

  $('[data-slick]').slick();

});
