import ClientOAuth2 from 'client-oauth2'
import { mediawikiConfig } from '../config'
import { fetch } from 'popsicle'

const mediaWikiOAuth2Client = new ClientOAuth2( {
  clientId: mediawikiConfig.oauthConsumerKey,
  clientSecret: mediawikiConfig.oauthConsumerSecret,
  accessTokenUri: `${mediawikiConfig.restUrl}/oauth2/access_token`,
  authorizationUri: `${mediawikiConfig.restUrl}/oauth2/authorize`,
  redirectUri: mediawikiConfig.callbackUrl,
  scopes: ['mwoauth-authonly']
})

export default {
  getAuthRedirect: () =>
    mediaWikiOAuth2Client.code.getUri(),

  processCallback: (url) =>
    mediaWikiOAuth2Client.code.getToken(url),

  getUserProfile: (authenticatedUser) => {
    const url = `${mediawikiConfig.restUrl}/oauth2/resource/profile`
    const signed = authenticatedUser.sign({ url })

    return fetch(url, {
      method: 'GET',
      headers: signed.headers
    }).then(res => res.json())
  }
}
