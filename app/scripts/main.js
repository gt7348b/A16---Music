Parse.initialize("dq8BpBagx8FKW9IRjNiZsDxbkGIdnzKMzzeABvho", "r6aeI6bmmaHj7wyhT6aKVdu5lB7Gd5G8dsqf8hWQ");


(function(){

    //Create playlist

    App.work_playlist = new App.Collections.Playlist();


    App.work_playlist.fetch().done(function(){
      console.log(App.work_playlist);

      App.router = new App.Routers.approuter();
    });





}());
