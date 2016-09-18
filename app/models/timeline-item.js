import Reactionable from 'mestlife/mixins/reactionable';
import DS from 'ember-data';

export default DS.Model.extend(Reactionable, {
  itemText: DS.attr('string'),
  kind: DS.attr('string')
});
