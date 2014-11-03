var Playlist = Backbone.Collection.extend({

  model:  Song,
  url:    'https://tiy-atl-fe-server.herokuapp.com/collections/jtc_playlist', 

});
