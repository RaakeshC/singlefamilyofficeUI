import Ember from 'ember';
import CONFIG from 'family/config/environment';
export default Ember.Route.extend({
    model(){
                 this.transitionTo('wealthmanagement');
            // this.controllerFor('application').set('showregistration', false);
             //  this.controllerFor('application').set('isShowlogin', false);

    }
});
