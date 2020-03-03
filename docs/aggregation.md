---
title: Global Statistics
class: aggregation
---

# Global Statistics

<div class="graphsContainer">
  {% include graph.html title="Entries by type" src="/stats?field=about.@type" %}
  {% include graph.html title="Entries by primary education sector" src="/stats?field=about.primarySector.@id" %}
  {% include graph.html title="Entries by secondary education sector" src="/stats?field=about.secondarySector.@id" %}
  {% include graph.html title="Projects by Funders" src="/stats?field=about.isFundedBy.isAwardedBy.@id" %}
  {% include graph.html title="Top 5 Service Languages" src="/stats?field=about.availableChannel.availableLanguage&size=5" %}
  {% include graph.html title="Top 5 Countries" src="/stats?field=feature.properties.location.address.addressCountry&size=5" %}
  {% include graph.html title="Services by License" src="/stats?field=about.license.@id&q=about.@type:Service" %}
  {% include graph.html title="Services by Topic" src="/stats?field=about.about.@id&q=about.@type:Service" %}
  {% include graph.html title="Top 5 Keywords" src="/stats?field=about.keywords&size=5" %}
  {% include graph.html title="Projects by Participant's Countries" src="/stats?field=about.agent.location.address.addressCountry&q=about.@type:Action" %}
  {% include graph.html title="Services by Audience" src="/stats?field=about.audience.@id&q=about.@type:Service" %}
  {% include graph.html title="Projects by Country" src="/stats?field=feature.properties.location.address.addressCountry&q=about.@type:Action" %}
</div>