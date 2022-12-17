var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var size= rootStyles.getPropertyValue('--size');
console.log(size); 

function updateTimer() {

	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse("2022-12-17 17:00:00");
  now     = new Date();
  diff    = now - past;

  days   = Math.floor( diff / (1000*60*60*24) );
  hours  = Math.floor( diff / (1000*60*60) );
  mins   = Math.floor( diff / (1000*60) );
  secs   = Math.floor( diff / 1000 );

  d = days   
  h = hours  - days   * 24;
  m = mins   - hours  * 60;
  s = secs   - mins   * 60;
  if (d<9){
    document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '</div>' 
     console.log(("true"));
    }

else if (d>9 && d<100){
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '</div>' 
    console.log("test");
    document.getElementById("timer").style.fontSize = '550%';
    document.getElementById("timer").style.marginTop= '-47.5%';
    document.getElementById("timer").style.marginLeft= '54.8%';
    document.getElementById("timer").style.fontWeight= 'bolder';
  }

  else if (d>100){
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '</div>' 
    console.log(d);
    document.getElementById("timer").style.fontSize = '350%';
    document.getElementById("timer").style.marginTop= '-46.7%';
    document.getElementById("timer").style.marginLeft= '55%';
    document.getElementById("timer").style.fontWeight= 'bolder';
  }

}
setInterval('updateTimer()', 1000 );
