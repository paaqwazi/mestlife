import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments);
    const reactionable = {
      type: json.data.attributes['reactionable-type'],
      id: json.data.attributes['reactionable-id']
    }

    delete json.data.attributes['reactionable-type'];
    delete json.data.attributes['reactionable-id'];

    json.data.relationships.reactionable.data = reactionable;
    return json;
  }
});
