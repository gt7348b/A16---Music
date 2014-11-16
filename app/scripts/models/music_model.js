(function(){

    App.Models.Song = Parse.Object.extend({

      className: 'Music',

      defaults: {
        title: '',
        artist: '',
        link: '',
      },

      idAttribute: 'objectId',

      initialize: function(){
      //  console.log('Lucky?')
      }

    });

}());
