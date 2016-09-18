import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

const { get } = Ember;

moduleForModel('comment', 'Unit | Model | comment', {
  needs: ['model:reactionable']
});

test('should belong to reactionable', function(assert) {
  assert.expect(2);

  const Comment = this.store().modelFor('comment');
  const relationship = get(Comment, 'relationshipsByName').get('reactionable');

  assert.equal(relationship.key, 'reactionable', 'has relationship with reactionable');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is `belongsTo`');
});
