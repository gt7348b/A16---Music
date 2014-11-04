          window.App = {};
          App.Models = {};
          App.Collections = {};
          App.Views = {};

(function(){

    App.Models.Song = Backbone.Model.extend({
      defaults: {
        title: '',
        artist: '',
        link: ''
      },

      idAttribute: '_id',

      initialize: function(){
      //  console.log('Lucky?')
      }

    });

}());

(function(){

      App.Collections.Playlist = Backbone.Collection.extend({

      model:  App.Models.Song,
      url:    'https://tiy-atl-fe-server.herokuapp.com/collections/jtc_playlist',

    });

}());

(function(){

    App.Views.playlistView = Backbone.View.extend({

      tagName: 'ul',
      className: 'musiclist',

      events: {
        'click span': 'deleteSong'
      },

      initialize: function(){
        //console.log('initialized');
        this.render(App.work_playlist);

        App.work_playlist.on('sync', this.render, this);
        App.work_playlist.on('destry', this.render, this);
      },

      render: function(){
        var self = this;
        var template = $('#songlist').html();
        var render_song = _.template(template);

        _.each(App.work_playlist.models, function(item){

          self.$el.append(render_song(item.attributes));

          //console.log(item.id);

        });

        $('#playlist').html(this.el);

        return this;
      },

      deleteSong: function(event){
        event.preventDefault();

        var id = $(event.target).attr('id');

        //console.log(id);

        var eliminate = App.work_playlist.get(id);

        //console.log(eliminate);

        eliminate.destroy();

      }

    });

}());

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
