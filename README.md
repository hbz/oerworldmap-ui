# oerworldmap-ui
The user interface for https://oerworldmap.org/

## Prerequisits

- git
- Node v8

## Installation

Clone this repository:
```
$ git clone https://github.com/hbz/oerworldmap-ui.git
$ cd oerworldmap-ui
```

Install node packages:
```
$ npm install
```

Set up environment:
```
$ cp .env.example .env
Open .env in the editor of your choice and configure as follows:

SERVER_HOST=localhost
SERVER_PORT=3000
MAPBOX_ACCESS_TOKEN=your.mapbox.access.token
MAPBOX_STYLE=username/style_id
API_HOST=https://oerworldmap.org
API_PORT=443
API_SCHEME=http
PIWIK_ID=your.piwik.id
PIWIK_URL=your.piwik.url
```

Check if all is well and run:
```
$ npm test
$ npm run watch
$ npm run dev
``

Apache configuration

Enable modules
```
sudo a2enmod rewrite #mod_rewrite
sudo a2enmod proxy #mod_proxy
sudo a2enmod proxy_http #mod_proxy_http
```

Add new VirtualHost config and enable it
```
<VirtualHost *:80>

  ServerName oerworldmap.local

  AllowEncodedSlashes NoDecode

  RewriteEngine On

  RewriteCond %{HTTP:Accept} application/json

  RewriteRule (.*) http://oerworldmap.graphthinking.com$1 [P,L]

  RewriteRule "(/.login|/.logout)" http://oerworldmap.graphthinking.com$1 [P,L]

  RewriteRule (.*) http://localhost:3000$1 [P,L]

</VirtualHost>
```

Add url to `/etc/hosts`

```
127.0.0.1 oerworldmap.local
```

Visit http://oerworldmap.local/resource/


## Tests

To run all tests

```
npm test
```

To run a single test the description tag of the test must be passed to the npm script

```
npm run singleTest -- "<ActionButtons />"
```
