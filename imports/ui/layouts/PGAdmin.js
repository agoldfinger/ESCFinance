import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './PGAdminLayout.html';
import './PGOrder.js';
import './PGReview.js';
import './PGSettings.js';

Template.PGAdminLayout.onCreated( function() {
    this.currentTab = new ReactiveVar("PGOrder");
});

Template.PGAdminLayout.helpers({
    tab: function() {
        return Template.instance().currentTab.get();
    }
});

Template.PGAdminLayout.events({
    'click #admin-tab': function(e, template) {
        const cTab = $(e.target);
        $('.active').removeClass('active');
        cTab.addClass('active');

        Template.instance().currentTab.set(cTab.data('template'));
        console.log(Template.instance().currentTab.get());
    }
});
