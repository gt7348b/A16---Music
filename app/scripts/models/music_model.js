(function(){

    App.Models.Song = Backbone.Model.extend({
      defaults: {
        title: '',
        artist: '',
        link: ''
      },

      idAttribute: '_id',

      initialize: function(){
      //  console.log('Lucky?')
      }

    });

}());
