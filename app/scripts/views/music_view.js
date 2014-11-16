
(function(){

    App.Views.playlistView = Parse.View.extend({

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

        this.$el.empty();

        _.each(App.work_playlist.models, function(item){

          self.$el.append(render_song(item.attributes.toJSON));

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
