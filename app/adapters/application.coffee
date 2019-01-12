import DS from 'ember-data'
import config from 'ember-get-config'

ApplicationAdapter = DS.RESTAdapter.extend

  host: config.host

export default ApplicationAdapter
