import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  itemText() { return faker.hacker.phrase(); }
});
