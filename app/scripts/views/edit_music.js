(function(){

  App.Views.editmusicView = Parse.View.extend({

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
      console.log(this.options.song.attributes.artist);
      var template = _.template($('#editmusicitem').html());
      this.$el.empty();
      console.log(template);
      link = this.options.song.attributes.link;
      artist = this.options.song.attributes.artist;
      this.$el.html(this.template(this.options.song.attributes));
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
