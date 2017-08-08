import dotenv from 'dotenv'
import getenv from 'getenv'

// load env file
dotenv.config()

export const mapboxConfig = getenv.multi({
  token: 'MAPBOX_ACCESS_TOKEN',
  style: 'MAPBOX_STYLE'
})

// export server configuration
export default getenv.multi({
  env: 'NODE_ENV',
  host: 'SERVER_HOST',
  port: 'SERVER_PORT'
})
