(function (){

  App.Routers.approuter = Parse.Router.extend({

    initialize: function(){
      Parse.history.start();
    },

    routes: {
      '': 'home',
      'edit/:id': 'editmusic'
    },

    home: function(){
      console.log('show home function')

      new App.Views.playlistView({ collection: App.work_playlist
      });
      new App.Views.AddSong();
    },

    editmusic: function(id){

      var music = App.work_playlist.get(id);
      console.log(id);
      new App.Views.editmusicView({ song: music });

    }

  })


}());
