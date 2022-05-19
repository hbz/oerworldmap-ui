import ClientOAuth2 from 'client-oauth2'
import { mediawikiConfig } from '../config'

export const MediaWikiOAuth2Client = new ClientOAuth2({
  clientId: mediawikiConfig.oauthConsumerKey,
  clientSecret: mediawikiConfig.oauthConsumerSecret,
  accessTokenUri: `${mediawikiConfig.restUrl}/oauth2/access_token`,
  authorizationUri: `${mediawikiConfig.restUrl}/oauth2/authorize`,
  redirectUri: mediawikiConfig.callbackUrl,
  scopes: ['mwoauth-authonly']
})
