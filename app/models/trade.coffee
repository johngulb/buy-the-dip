import DS from 'ember-data'

Trade = DS.Model.extend

  modelName: 'trade'
  side: DS.attr 'string'
  price: DS.attr 'number'
  size: DS.attr 'number'
  time: DS.attr 'date'

export default Trade
