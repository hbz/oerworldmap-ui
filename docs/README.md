# OER World Map static content
Static content, such as pages and images, for https://oerworldmap.org

## Development

Bundle CSS and scripts:

Webpack will bundle the files in memory and serve them from `localhost:8080`
```
npm run site:dev
```

Start Jekyll via Docker:
```
cd docs && docker-compose up
```

Visit http://localhost:4000/oerworldmap-ui/

## Production

This command will create `js/bundle.js` and `css/style.css` inside assets, these files should be committed.
```
npm run site:prod
```
