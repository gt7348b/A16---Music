(function(){

    App.Views.AddSong = Parse.View.extend({

        //el: '#addnew',
        className: 'addmusic',

        events: {
          'submit #songInput': 'addNewSong'
        },


        template: _.template($('#newsong').html()),

        initialize: function(options){
          console.log('initialized');
          this.options = options;
          this.render();
        },

        render: function(){
          this.$el.html($('#newsong').html());
        },

        addNewSong: function(e){
          e.preventDefault();

          var newsong = new App.Models.Song({
            title: $('#input_title').val(),
            artist: $('#input_artist').val(),
            link:   $('#input_link').val()

          });

          console.log(newsong);

          App.work_playlist.add(newsong);

          console.log(App.work_playlist);

          newsong.save();

          //Go back to main page
          App.router.navigate('', {trigger: true});

        },

    })

}());
