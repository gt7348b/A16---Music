(function(){

    //Create playlist

    App.work_playlist = new App.Collections.Playlist();


    App.work_playlist.fetch().done(function(){
      //console.log(App.work_playlist);
      App.musicview = new App.Views.playlistView({
      });

    });

    new App.Views.AddSong();


}());
