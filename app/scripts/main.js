//Create playlist

var work_playlist = new Playlist();


work_playlist.fetch().done(function(){


  console.log(work_playlist);

  var musicview = new playlistView({
  //  console.log('hi');
    list: work_playlist,

    //console.log(list);
  });
  console.log(musicview);
//console.log(work_playlist);

});
