---
title: Global Statistics
---

# Global Statistics

<!--
  TODO:
  - add server-side filter for about.@typeOrganization OR Service OR Person OR Action OR Event OR WebPage OR Product OR Article OR Policy
  - add size parameter
  - add include parameter
-->

## Entries by type
![](http://192.168.2.128:3000/stats?field=about.@type)

## Entries by primary education sector
![](http://192.168.2.128:3000/stats?field=about.primarySector.@id)

## Entries by secondary education sector
![](http://192.168.2.128:3000/stats?field=about.secondarySector.@id)

## Projects by Funders
![](http://192.168.2.128:3000/stats?field=about.isFundedBy.isAwardedBy.@id)

## Top 5 Service Languages
![](http://192.168.2.128:3000/stats?field=about.availableChannel.availableLanguage&size=5)

## Top 5 Countries
![](http://192.168.2.128:3000/stats?field=feature.properties.location.address.addressCountry&size=5)

## Services by License
![](http://192.168.2.128:3000/stats?field=about.license.@id&q=about.@type:Service)

## Services by Topic
![](http://192.168.2.128:3000/stats?field=about.about.@id&q=about.@type:Service)

## Top 5 Keywords
![](http://192.168.2.128:3000/stats?field=about.keywords&size=5)

## Projects by Participant's Countries
![](http://192.168.2.128:3000/stats?field=about.agent.location.address.addressCountry&q=about.@type:Action)

## Services by Audience
![](http://192.168.2.128:3000/stats?field=about.audience.@id&q=about.@type:Service)

## Projects by Country
![](http://192.168.2.128:3000/stats?field=feature.properties.location.address.addressCountry&q=about.@type:Action)
