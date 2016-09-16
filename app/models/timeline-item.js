import DS from 'ember-data';
import Reactionable from 'mestlife/models/reactionable';

export default Reactionable.extend({
  itemText: DS.attr('string')
});
