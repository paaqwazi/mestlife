import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

const { get } = Ember;

moduleForModel('comment', 'Unit | Model | comment', {
  needs: ['model:reactionable']
});

test('should belong to a reactionable', function(assert) {
  const Comment = this.store().modelFor('comment');
  const relationship = get(Comment, 'relationshipByName').get('reactionable');

  assert.equal(relationship.key, 'reactionable', 'has relationship with reactionable');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is `belongsTo`');
});
