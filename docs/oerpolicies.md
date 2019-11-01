---
title: OER Policy registry
class: oerPolicies
---
import Feed from '../src/components/Feed'
import Oerpolicies from '../src/components/oerpolicies'

<div className="center">
<img src="/assets/images/oer_policy_registry_v01.png" title="The OER World Map Policy Registry" />
</div>
<div className="center"><a className="btn" href="#statistic-explorer"><i className="fa fa-pie-chart" aria-hidden="true"></i> Statistic explorer</a> <a className="btn" href="#latest-policies-added">Latest</a> <a className="btn" href="#latest-policy-related-entries">Related</a> | <a className="btn" href="#add-a-policy"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Add policy</a> | <a className="btn" href="#faq">FAQ</a> | <a className="btn" href="/resource/?filter.about.%40type=Policy&size=20" target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i> All Policies (list)</a></div>

<div className="smallText"><i className="fa fa-heart" aria-hidden="true"></i> Thanks, Creative Commons!</div>

## Statistic explorer
<div><i className="fa fa-hand-pointer-o" aria-hidden="true"></i> The statistics are interactive, you can click on it to get to the list of criteria matching policies!</div>
<iframe
  src="/kibana/app/kibana#/dashboard/3f24aa90-e370-11e8-bc1a-bd36147d8400?embed=true&_g=()"
  data-scope="filter.about.@type=Policy"
  height="750"
  width="800"
></iframe>

<Oerpolicies />

<br />
<br />

<a className="btn" href="/resource/?filter.about.%40type=Policy&size=20" target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i> All Policies (list)</a>

## Latest policies added

<Feed member={[]} url="/resource.json?q=about.@type:Policy&sort=dateCreated:DESC"/>
<a className="btn" href="/resource/?filter.about.%40type=Policy&size=20" target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i> All Policies</a> | <a className="btn" href="#add-a-policy" target="_blank"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Add a policy</a>


## Latest policy related entries
<Feed member={[]} url="resource.json?q=NOT%20about.@type:Policy%20AND%20about.keywords:policy&sort=dateCreated:DESC"/>
<div><a className="btn" href="" target="_blank">All related entries (list)</a></div>

## FAQ
### Add a policy

Any registered OER world map user can add a policy to the OER policy registry: <a href="/resource/?add=Policy" target="_blank">Add a policy</a>. If you're not registered yet, you can <a href="https://oerworldmap.org/user/register" target="_blank">join here</a>. See the Policy Registry Manual for a detailed description of all fields: <a href="https://kurzelinks.de/yuge" target="_blank">Editors guide (beta)</a>

<a href="/resource/?add=Policy" className="btn" target="_blank"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Add a policy</a> <a href="https://kurzelinks.de/yuge" target="_blank" className="btn"><i className="fa fa-book" aria-hidden="true"></i> Editors guide (beta)</a>

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

<div className="smallText center"><i className="fa fa-heart" aria-hidden="true"></i> Thanks, Creative Commons and thanks for everyone participating!</div>
