// // Import stylesheets
// import './style.css';

// Write Javascript code!
function mytime(){
  let time=new Date();
  let hour=time.getHours();
  let minutes=time.getMinutes();
  let seconds=time.getSeconds();
  let session=(hour >=12) ? "PM":"AM" ;

if(hour===0){
  hour=12;
}
else if(hour>12){
  hour=hour-12;
}

hour=(hour <10) ? "0" + hour:hour;
minutes=(minutes <10) ? "0"+ minutes:minutes;
seconds=(seconds <10) ? "0"+ seconds:seconds;

const totalTime=hour+":"+minutes+":"+seconds+" "+session;

document.getElementById("clock").innerText=totalTime;
setTimeout(mytime, 1000);
}
mytime();

