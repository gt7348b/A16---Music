(function(){

      App.Collections.Playlist = Parse.Collection.extend({

      model:  App.Models.Song,
      url:    'https://tiy-atl-fe-server.herokuapp.com/collections/jtc_playlist',

    });

}());
