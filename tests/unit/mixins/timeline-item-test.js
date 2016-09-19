import Ember from 'ember';
import TimelineItemMixin from 'mestlife/mixins/timeline-item';
import { module, test } from 'qunit';

module('Unit | Mixin | timeline item');

// Replace this with your real tests.
test('it works', function(assert) {
  let TimelineItemObject = Ember.Object.extend(TimelineItemMixin);
  let subject = TimelineItemObject.create();
  assert.ok(subject);
});
