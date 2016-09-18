import { moduleForModel, test } from 'ember-qunit';

moduleForModel('text-timeline-item', 'Unit | Serializer | text timeline item', {
  // Specify the other units that are required for this test.
  needs: ['serializer:text-timeline-item']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
