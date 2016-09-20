import Ember from 'ember';

export default Ember.Route.extend({
  model({postId}) {
    return this.store.findRecord('timeline-item', postId, { include: 'comments' });
  }
});
