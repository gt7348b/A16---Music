(function(){

    App.Views.playlistView = Backbone.View.extend({

      tagName: 'ul',
      className: 'musiclist',

      initialize: function(){
        //console.log('initialized');
        this.render(App.work_playlist);
      },

      render: function(){
        var self = this;
        var template = $('#songlist').html();
        var render_song = _.template(template);

        _.each(App.work_playlist.models, function(item){

          self.$el.append(render_song(item.attributes));

        });

        $('#playlist').html(this.el);

        return this;
      },

    });

}());
