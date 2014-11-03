var Song = Backbone.Model.extend({
  defaults: {
    title: '',
    artist: '',
    link: ''
  },

  idAttribute: '_id',

  initialize: function(){
    console.log('Lucky?')
  }

});

var Playlist = Backbone.Collection.extend({

  model:  Song,
  url:    'https://tiy-atl-fe-server.herokuapp.com/collections/jtc_playlist', 

});

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

//Create playlist

var work_playlist = new Playlist();


work_playlist.fetch().done(function(){


  console.log(work_playlist);

  var musicview = new playlistView({
  //  console.log('hi');
    list: work_playlist,

    //console.log(list);
  });
  console.log(musicview);
//console.log(work_playlist);

});

$('.btn button').on('click', function(event){
  event.preventDefault();

  var newsong = new Song({
    title: $('#input_title').val(),
    artist: $('#input_artist').val(),
    link:   $('#input_link').val()

  });

      console.log(newsong);

  work_playlist.add(newsong);

  console.log(work_playlist);

  newsong.save();

  work_playlist.fetch().done(function(){

    var musicview = new playlistView({
      list: work_playlist,

    });

  });



});