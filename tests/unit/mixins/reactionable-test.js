import Ember from 'ember';
import ReactionableMixin from 'mestlife/mixins/reactionable';
import { module, test } from 'qunit';

module('Unit | Mixin | reactionable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ReactionableObject = Ember.Object.extend(ReactionableMixin);
  let subject = ReactionableObject.create();
  assert.ok(subject);
});
