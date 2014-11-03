//Create playlist

var work_playlist = new Playlist();


work_playlist.fetch().done(function(){

  console.log(work_playlist);

});
