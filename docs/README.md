# OER World Map static content
Static content, such as pages and images, for https://oerworldmap.org

## Development

Start Jekyll via Docker:
```
cd docs && docker-compose up
```

Bundle CSS and scripts:

Webpack will bundle the files in memory and serve them from `localhost:8080`
```
npm run site:dev
```

## Production

This command will create `js/bundle.js` and `css/style.css` inside assets, this files should be commited.
```
npm run site:prod
```
