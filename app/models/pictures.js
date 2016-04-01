app.pictures= {
  all: [],
  new: (function(){
    var counter = 0;
    var picture = function(state, favs){
      this.state= state;
      this.favs= favs;
      this.id= ++counter;
      app.pictures.all.push(this)
    }(); 
  }
    return picture;
  }())
}
