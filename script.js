document.getElementById('start').addEventListener("click",function (event) {
  event.preventDefault();



  document.getElementById('date').style.display='none';
  document.getElementById('time').style.display='none';
  document.getElementById('start').style.display='none';
  

  document.getElementById('star').style.display='block';
  


  var dateTime = document.getElementById('date').value + " " + document.getElementById('time').value;

  
  var deadline = new Date(dateTime);
  startClock(deadline);

  function remainderTime(endtime) {
    var timemili = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((timemili / 1000) % 60);
    var minutes = Math.floor((timemili / 1000 / 60) % 60);
    var hours = Math.floor((timemili / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timemili / (1000 * 60 * 60 * 24));
    return {
      'total': timemili,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }


  function startClock(endtime) {
    var clock = document.getElementById('maindiv');
    var daysspace = clock.querySelector('.days');
    var hoursspace = clock.querySelector('.hours');
    var minutesspace = clock.querySelector('.minutes');
    var secondsspace = clock.querySelector('.seconds');
  
    function updateClock() {
      var time = remainderTime(endtime);
  
      daysspace.innerHTML = ('0' + time.days).slice(-2);
      hoursspace.innerHTML = ('0' + time.hours).slice(-2);
      minutesspace.innerHTML = ('0' + time.minutes).slice(-2);
      secondsspace.innerHTML = ('0' + time.seconds).slice(-2);
  
      if (time.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  




})

function relod(){
  window.location.reload();
}
  
