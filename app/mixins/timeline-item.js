import Ember from 'ember';
import DS from 'ember-data';
import Reactionable from 'mestlife/mixins/reactionable';

export default Ember.Mixin.create(Reactionable, {
  itemText: DS.attr('string'),
  kind: DS.attr('string')
});
