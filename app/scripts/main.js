(function(){

    //Create playlist

    App.work_playlist = new App.Collections.Playlist();


    App.work_playlist.fetch().done(function(){
      //console.log(App.work_playlist);
      
      App.router = new App.Routers.approuter();
    });





}());
