import dotenv from 'dotenv'
import getenv from 'getenv'

// load env file
dotenv.config()

export const mapboxConfig = getenv.multi({
  token: 'MAPBOX_ACCESS_TOKEN',
  style: 'MAPBOX_STYLE',
  miniMapStyle: 'MAPBOX_MINIMAP_STYLE'
})

export const apiConfig = getenv.multi({
  host: 'API_HOST',
  port: ['API_PORT', ''],
  scheme: ['API_SCHEME', 'http']
})

export const piwikConfig = getenv.multi({
  id: ['PIWIK_ID', ''],
  url: ['PIWIK_URL', '']
})

// export server configuration
export default getenv.multi({
  env: 'NODE_ENV',
  host: 'SERVER_HOST',
  port: 'SERVER_PORT'
})
