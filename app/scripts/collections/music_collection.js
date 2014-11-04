(function(){

      App.Collections.Playlist = Backbone.Collection.extend({

      model:  App.Models.Song,
      url:    'https://tiy-atl-fe-server.herokuapp.com/collections/jtc_playlist',

    });

}());
