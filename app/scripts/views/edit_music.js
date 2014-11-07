(function(){

  App.Views.editmusicView = Backbone.View.extend({

    tagName: 'ul',
    className: 'editmusic',

    events: {

      'click #editbtn': 'updateSong',
      'click #deletebtn': 'deleteSong'
    },

    template: _.template($('#editmusicitem').html()),

    initialize: function(options){
      this.options = options;
      this.render();

      $('#addnew').empty();

      $('#playlist').html(this.$el);
    },

    render: function(song){
      console.log(this);

      this.$el.empty();
      this.$el.html($('#editmusicitem').html());
      //console.log(this.$el.html($('#editmusicitem').html(this.options.song.attr())));

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
