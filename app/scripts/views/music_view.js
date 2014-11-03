var playlistView = Backbone.View.extend({

  tagName: 'ul',
  className: 'musiclist',

  initialize: function(options){
    //console.log('initialized');
    this.render(options.list);
  },

  render: function(list){
    var self = this;
    var template = $('#songlist').html();
    var render_song = _.template(template);

    _.each(list.models, function(item){

      self.$el.append(render_song(item.attributes));

    });

    $('#playlist').html(this.el);

    return this;
  },

});
