import {
  moduleForComponent,
  test
} from 'ember-qunit';

import { registerHelper } from 'ember-truth-helpers/utils/register-helper';
import {
  orHelper
  } from 'ember-truth-helpers/helpers/or';

moduleForComponent('first-component', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {

  registerHelper('or',orHelper);

  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
