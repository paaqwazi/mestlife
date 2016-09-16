import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

const { get } = Ember;

moduleForModel('text-timeline-item', 'Unit | Model | text timeline item', {
  needs: ['model:comment']
});

test('should have many comments', function(assert) {
  const TextTimelineItem = this.store().modelFor('text-timeline-item');
  const relationship = get(TextTimelineItem, 'relationshipByName').get('comment');

  assert.equal(relationship.key, 'comment', 'has relationship with comment');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is `hasMany`');
});

