import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  reactionable: belongsTo('reactionable', { polymorphic: true })
});
