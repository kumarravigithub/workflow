import {
  Template
} from 'meteor/templating';

import './header.tpl.html';
import './header-search.tpl.html';

// Helper to allow {{title}} in template without passing in route via data args
Template.header.helpers({
  title: function() {
    return Router.current().route.options.title;
  }
});

Template.header.events({
  'click a#cmdRefresh' () {
    Meteor.call('refreshFiles', (err, res) => {
      if (err) {
        alert(err);
      } else {
        // success!
      }
    });

  },
});


(function() {
  'use strict';

  Template.header.onRendered(initHeader);

  function initHeader() {

    // Search modal
    var modalSearch = $('.modal-search');
    $('#header-search').on('click', function(e) {
      e.preventDefault();
      modalSearch
        .on('show.bs.modal', function() {
          // Add class for white backdrop
          $('body').addClass('modal-backdrop-soft');
        })
        .on('hidden.bs.modal', function() {
          // Remove class for white backdrop (if not will affect future modals)
          $('body').removeClass('modal-backdrop-soft');
        })
        .on('shown.bs.modal', function() {
          // Auto focus the search input
          $('.header-input-search').focus();
        })
        .modal();
    });

    // Settings modal
    var modalSettings = $('.modal-settings');
    $('#header-settings').on('click', function() {
      modalSettings
        .on('show.bs.modal', function() {
          // Add class for soft backdrop
          $('body').addClass('modal-backdrop-soft');
        })
        .on('hidden.bs.modal', function() {
          // Remove class for soft backdrop (if not will affect future modals)
          $('body').removeClass('modal-backdrop-soft');
        })
        .modal();
    });

  }

})();
