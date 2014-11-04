(function(){

    //Create playlist

    App.work_playlist = new App.Collections.Playlist();


    App.work_playlist.fetch().done(function(){
      //console.log(App.work_playlist);
      App.musicview = new App.Views.playlistView({
      });

    });

    new App.Views.AddSong();

    $('.btn button').on('click', function(event){
      event.preventDefault();

      var newsong = new Song({
        title: $('#input_title').val(),
        artist: $('#input_artist').val(),
        link:   $('#input_link').val()

      });

        //  console.log(newsong);

      work_playlist.add(newsong);

      //console.log(work_playlist);

      newsong.save();

    //  $("#input_title")[0].reset();
    //  $("#input_artist")[0].reset();
    //  $("#input_link")[0].reset();

      work_playlist.fetch().done(function(){

        var musicview = new playlistView({
          list: work_playlist,

        });

      });



    });

}());
