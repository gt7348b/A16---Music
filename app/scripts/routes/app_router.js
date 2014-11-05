(function (){

  App.Routers.approuter = Backbone.Router.extend({

    initialize: function(){
      Backbone.history.start();
    },

    routes: {
      '': 'home',
      'edit/:id': 'editmusic'
    },

    home: function(){
      console.log('show home function')

      App.musicview = new App.Views.playlistView({
      });
      new App.Views.AddSong();
    }


  })


}());
