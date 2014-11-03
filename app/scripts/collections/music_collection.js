var Playlist = Backbone.Collection.extend({

  model:  Song,
  url:    'http://tiy-atl-fe-server.herokuapp.com/collections/jtc_playlist', 

});
