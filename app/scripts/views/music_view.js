
(function(){

    App.Views.playlistView = Parse.View.extend({

      tagName: 'ul',
      className: 'musiclist',

      events: {
        'click span': 'deleteSong'
      },

      initialize: function(options){
        console.log(options);

        this.options = options;

        this.collection.off();
        App.work_playlist.on('sync', this.render, this);
        App.work_playlist.on('destroy', this.render, this);

        this.render();
        $('#playlist').html(this.el);
      },

      render: function(){
        var self = this;
        var template = $('#songlist').html();
        var render_song = _.template(template);

        this.$el.empty();

        this.collection.each(function(c){
          console.log(c);
          console.log(render_song);
          console.log(self);
          self.$el.append(self.render_song(c.toJSON()));

        });



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
