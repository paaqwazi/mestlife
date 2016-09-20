import Ember from 'ember';

export default Ember.Controller.extend({
  commentContent: null,

  actions: {
    createComment() {
      let newComment = this.get('store').createRecord('comment', {
        content: this.get('commentContent'),
        reactionableType: 'timeline-items',
        reactionableId: this.get('model').get('id')
      });

      this.get('model').get('comments').pushObject(newComment);
      newComment.save().
        then(() => this.set('commentContent', null)).
        catch(error => console.error('ERROR', error));

      return false;
    }
  }
});
