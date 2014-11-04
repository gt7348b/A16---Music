(function(){

    App.Views.AddSong = Backbone.View.extend({

        el: '#addnew',


        initialize: function(){
          this.render();
        },

        render: function(){
          this.$el.html($('#newsong').html());
        },

    })

}());
