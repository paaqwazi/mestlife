import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  reactionable: belongsTo('reactionable', { polymorphic: true }),
  reactionableId: attr('string'),
  reactionableType: attr('string'), // This property is used to determine
                                    // the subclass of `reactioanble`. It's
                                    // deleted before save, in the serializer.

  content: attr('string'),
  createdAt: attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: attr('date', { defaultValue() { return new Date(); } })
});
