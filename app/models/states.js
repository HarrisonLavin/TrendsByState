app.states={
  all:[],
  new: (function(){
    var state= function(name){
      this.name= name;
      this.place_id= function(){
      };
      this.posts= (function(){
        return [];
      })
      this.tags=[];
    }
  })

}


States.prototype.topPosts = function() {
  //sorts posts by number of likes
};