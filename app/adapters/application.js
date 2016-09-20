import DS from 'ember-data';
import ENV from 'mestlife/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_URL,
  namespace: ENV.API_VERSION,
});
