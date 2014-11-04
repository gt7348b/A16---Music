(function(){

    App.Views.AddSong = Backbone.View.extend({

        el: '#addnew',

        events: {
          'submit #songInput': 'addNewSong'
        },

        initialize: function(){
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

          $('#songInput')[0].reset();
        },

    })

}());
