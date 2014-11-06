          window.App = {};
          App.Models = {};
          App.Collections = {};
          App.Views = {};
          App.Routers = {};

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
        console.log('initialized');
        this.render(App.work_playlist);

        App.work_playlist.on('sync', this.render, this);
        App.work_playlist.on('destroy', this.render, this);
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

  App.Views.editmusicView = Backbone.View.extend({

    tagName: 'ul',
    className: 'editmusic',

    events: {

      'submit #editbtn': 'updateSong',
      'click #deletebtn': 'deleteSong'
    },

    template: _.template($('#editmusicitem').html()),

    initialize: function(options){
      this.options = options;
      this.render();

      $('#playlist').html(this.$el);
    },

    render: function(){
      console.log(this);
      this.$el.empty();
      this.$el.html($('#editmusicitem').html());
      //this.$el.html(template(this.options.song.toJSON()));

    },

    updateSong: function(e){
      e.preventDefault();

      this.options.song.set({
        title: $('#edit_title').val(),
        artist: $('#edit_artist').val(),
        link:   $('#edit_link').val()

      });

      //Save the edit
      this.options.song.save();

      //Go back to main page
      App.router.navigate('', {trigger: true});

    },

    deleteSong: function(c){
      c.preventDefault();

      //Remove Song
      this.options.song.destroy();

      //Return to home page
      App.router.navigate('', {trigger: true});

    }

  })

}());

(function (){

  App.Routers.approuter = Backbone.Router.extend({

    initialize: function(){
      Backbone.history.start();
    },

    routes: {
      '': 'home',
      'edit/:id': 'editmusic'
    },

    home: function(){
      console.log('show home function')

      new App.Views.playlistView({ collection: App.work_playlist
      });
      new App.Views.AddSong();
    },

    editmusic: function(id){

      var music = App.work_playlist.get(id);
      console.log(id);
      new App.Views.editmusicView({ song: music });

    }

  })


}());

(function(){

    //Create playlist

    App.work_playlist = new App.Collections.Playlist();


    App.work_playlist.fetch().done(function(){
      console.log(App.work_playlist);

      App.router = new App.Routers.approuter();
    });





}());
