app.tags={
  all: [],
  new: (function(){
    var counter = 0;
    var tag = function(state,){
      this.state= state;
      this.instaID= instaID;
      this.posts= (function(){
        return [];
      })
      this.id= ++counter;
      app.tags.all.push(this)
    }(); 
  }
    return tag;
  }())
}
