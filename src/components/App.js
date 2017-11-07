import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import WebPage from './WebPage'
import Header from './Header'
import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import NotificationWelcome from './NotificationWelcome'
import ActionButtons from './ActionButtons'
import withEmitter from './withEmitter'
import ErrorPage from './ErrorPage'
import ItemList from './ItemList'
import Pagination from './Pagination'
// import UserForm from './UserForm'
import Loading from './Loading'
import Country from './Country'


const defaultAggregations = {
  'about.@type': {
    'buckets': [
      {key: 'Product'},
      {key: 'Organization'},
      {key: 'CustomerRelationship'},
      {key: 'ContactPoint'}
    ]
  }
}

const App = ({ route, data, mapboxConfig, user, features, emitter }) => (
  <div
    id="wrapper"
    tabIndex="-1"
    role="button"
    onClick={(e) => {
      emitter.emit("click", e)
    }}
  >
    {console.log("ROUTE", route)}

    <main className="container">

      <Header user={user} />

      {data['@type'] === 'ErrorPage' ? (
        <div className="content">
          <ErrorPage {...data} />
        </div>
      ) : (
        data['@type'] === 'WebPage' ? (
          <div className="content">
            <WebPage {...data} />
          </div>
        ): (
          <div className="content">
            <ActionButtons />

            {data.iso3166 &&
              <Country
                iso3166={data.iso3166}
                countryData={data.aggregations['about.location.address.addressCountry'].buckets[0]}
              />
            }

            <Columns emitter={emitter}>
              <Column>
                {/* <Column className={data['@type'] === 'WebPage' ? 'transparentColumn' : null}> */}
                <Filters
                  query={data['query'] || ''}
                  filters={data['filters'] || {'about.@type': [data.about['@type']]}}
                  aggregations={data['aggregations'] || defaultAggregations}
                  extended={data['@type'] === 'PagedCollection'}
                  member={data.member || null}
                />
                {data['@type'] === 'PagedCollection' &&
                <div className="ColumnList">
                  <ItemList listItems={data.member} />
                  <Pagination
                    totalItems={data.totalItems}
                    currentPage={data.currentPage}
                    pages={data.pages}
                    nextPage={data.nextPage}
                    previousPage={data.previousPage}
                    from={data.from}
                    size={data.size}
                  />
                </div>
                }
              </Column>
            </Columns>

            <Map
              aggregations={data.aggregations}
              emitter={emitter}
              mapboxConfig={mapboxConfig}
              features={features}
              iso3166={data.iso3166}
            />
          </div>
        )
      )}

      <NotificationWelcome data={data} />
      {/* <UserForm /> */}
      <Loading />

    </main>
  </div>
)

App.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  features: PropTypes.objectOf(PropTypes.any),
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string,
  route: PropTypes.objectOf(PropTypes.any).isRequired
}

App.defaultProps = {
  user: null,
  features: null,
}

export default withEmitter(App)
