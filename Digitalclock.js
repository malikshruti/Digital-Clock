let clock = () =>{
    let now = new Date();
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();
   let amorpm = hours>=12 ? 'pm' : 'am';
   
   document.getElementById('hours').innerHTML=hours;
   document.getElementById('minutes').innerHTML=minutes;
   document.getElementById('seconds').innerHTML=seconds;
   document.getElementById('amorpm').innerHTML=amorpm;
   
   
   setTimeout( clock , 1000);
   
   }
   
   clock();