export default ({ id, url }) => `
    <script type="text/javascript">
      var _paq = _paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
      var u='//${url}';
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['setSiteId', '${id}']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    <noscript><p><img src="//${url}piwik.php?idsite=${id}" style="border:0;" alt="Piwik Url" /></p></noscript>
  `
