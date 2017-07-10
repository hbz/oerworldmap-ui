import dotenv from 'dotenv'
import getenv from 'getenv'

// load env file
dotenv.config()

export default getenv.multi({
  env: 'NODE_ENV',
  host: 'SERVER_HOST',
  port: 'SERVER_PORT'
})
