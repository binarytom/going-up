import * as api from './api';
import * as auth from './auth';

auth.authorize();

api.getMarketsList().then(function(response) {
    return response.json();
}).then(function(json) {
    console.log('parsed json', json);
}).catch(function(ex) {
    console.log('parsing failed', ex);
});
