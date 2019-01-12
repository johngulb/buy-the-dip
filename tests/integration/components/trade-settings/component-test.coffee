import { test, moduleForComponent } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent 'trade-settings', 'Integration | Component | trade-settings', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{trade-settings}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#trade-settings}}
      template block text
    {{/trade-settings}}
  """

  assert.equal @$().text().trim(), 'template block text'
