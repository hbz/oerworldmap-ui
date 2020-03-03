---
title: OER Policy registry
class: oerPolicies
---

<div style="width:100%;text-align:center;">
<img style="width:auto;margin:0 auto;border:0px solid transparent;border-radius:10px;" src="/assets/images/oer_policy_registry_v01.png" title="The OER World Map Policy Registry">
</div>
<div style="width:100%;text-align:center;margin-top:8px;"><a class="btn" href="#latest-policies-added">Latest</a> <a class="btn" href="#latest-policy-related-entries">Related</a> | <a class="btn" href="#add-a-policy"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add policy</a> | <a class="btn" href="#faq">FAQ</a> | <a class="btn" href="/resource/?filter.about.%40type=Policy&size=20" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> All Policies (list)</a></div>

<div style="text-align:center;font-size:12px;margin-bottom:0px;margin-top:10px;"><i class="fa fa-heart" aria-hidden="true"></i> Thanks, Creative Commons!</div>

The OER Policy Registry records policies related to Open Education and Open Educational Resources from all educational sectors and levels.

The registry is a powerful resource for policy makers, advocates and researchers interested in Open Education. It supports finding good practice policy examples for reuse and benchlearning and charts the growth in open educational policy making worldwide. You can search available policies <a href="/resource/?filter.about.%40type=Policy&size=20">here</a>.

## Statistic explorer
<div style="font-size:18px; text-align:center;margin-bottom:15px;"><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> The statistics are interactive, you can click on it to get to the list of criteria matching policies!</div>

<div class="graphsContainer">
  {% include graph.html title="Policies by Country" src="/stats?field=about.location.address.addressCountry&q=about.@type:Policy" %}
  {% include graph.html title="Policies by Coverage" src="/stats?field=about.spatialCoverage&q=about.@type:Policy" %}
  {% include graph.html title="Policies by Educational Sector" src="/stats?field=about.primarySector.@id&q=about.@type:Policy" %}
</div>

<a class="btn" href="/resource/?filter.about.%40type=Policy&size=20" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> All Policies (list)</a>

## Latest policies added

<div data-inject-feed></div>
<a class="btn" href="/resource/?filter.about.%40type=Policy&size=20" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> All Policies</a> | <a class="btn" href="#add-a-policy" target="_blank"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add a policy</a>

## Latest policy related entries
<div data-inject-policy-related></div>
<div style="display:none;"><a class="btn" href="" target="_blank">All related entries (list)</a></div>

## FAQ

### Add a policy

Any registered OER world map user can add a policy to the OER policy registry: <a href="/resource/?add=Policy" target="_blank">Add a policy</a>. If you're not registered yet, you can <a href="https://oerworldmap.org/user/register" target="_blank">join here</a>. See the Policy Registry Manual for a detailed description of all fields: <a href="https://kurzelinks.de/yuge" target="_blank">Editors guide (beta)</a>

<a href="/resource/?add=Policy" class="btn" target="_blank"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add a policy</a> <a href="https://kurzelinks.de/yuge" target="_blank" class="btn"><i class="fa fa-book" aria-hidden="true"></i> Editors guide (beta)</a>

### What is a policy?
„Open education policies are formal regulations regarding support, funding, adoption, and use of open educational resources (OER) and/or open education practices (OEP). Such policies are designed to support the creation, adoption, and sharing of OER and the design and integration of OEP into programs of study.“ [7 Things You Should Know About... Open Education: Policy](https://library.educause.edu/resources/2018/8/7-things-you-should-know-about-open-education-policies)

### Why is a OER policy registry needed?
The OER Policy Registry allows anybody to easily share, update, and browse open education policies and legislation. It also hosts supporting policy resources such as case studies and guides. Adding open policies as a new layer to the OER World Map enables open advocates and policy makers to get a more complete picture of all open education activities in a particular region. It also provides a starting point for policy makers, open education activists and initiatives.

### What was the origin of the OER policy registry @ OER World Map?
We moved the OER Policy Registry from Creative Commons to the OER World Map in fall 2018. Gratitude to Creative Commons for creating, maintaining and contributing its OER Policy Registry to the OER World Map! We documented the conversion process [on our blog](https://oerworldmap.wordpress.com/2018/10/11/moving-the-oer-policy-registry-to-the-oer-world-map).

The work is not done yet, we hope to gather feedback here: [OER Policy Lab @ OER 19 Galway](https://oerworldmap.wordpress.com/2019/01/22/save-the-date-oer-policy-lab-oer19/). If you have feedback, contact us ( info@oerworldmap.org) or [submit an issue on github](https://github.com/hbz/oerworldmap/issues). Thanks in advance!

## Mentioned / used by:

* [Cable Green](https://twitter.com/cgreen/status/1070343155000709120)
* [Jennifer Englund](https://twitter.com/jmenglund03/status/1070334983624146944)

<div style="text-align:center;font-size:12px;margin-bottom:0px;margin-top:10px;"><i class="fa fa-heart" aria-hidden="true"></i> Thanks, Creative Commons and thanks for everyone participating!</div>
