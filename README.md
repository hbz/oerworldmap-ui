# oerworldmap-ui
The user interface for https://oerworldmap.org/

## Prerequisits

- git
- Node v6

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
```

Check if all is well and run:
```
$ npm test
$ npm run server:dev
```

Visit http://localhost:3000/
