import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

import { registerHelper } from 'ember-truth-helpers/utils/register-helper';

import { andHelper } from 'ember-truth-helpers/helpers/and';
import { orHelper } from 'ember-truth-helpers/helpers/or';
import { equalHelper } from 'ember-truth-helpers/helpers/equal';
import { notHelper } from 'ember-truth-helpers/helpers/not';
import { isArrayHelper } from 'ember-truth-helpers/helpers/is-array';

registerHelper('and',andHelper);
registerHelper('or',orHelper);
registerHelper('eq',equalHelper);
registerHelper('not',notHelper);
registerHelper('is-array',isArrayHelper);

setResolver(resolver);
