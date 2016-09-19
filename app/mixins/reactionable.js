import Ember from 'ember';
import DS from 'ember-data';

const { attr, hasMany } = DS;
const { Mixin } = Ember;

export default Mixin.create({
  comments: hasMany('comment'),

  createdAt: attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: attr('date', { defaultValue() { return new Date(); } }),

});
