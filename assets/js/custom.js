$(document).ready(function(){
    $('.profile').click(function(){
        $('.user-dropdown').toggleClass('user-show');
    })
})

const newDate = new Date('07-13-2024 09:00:00').getTime()
const countDown = setInterval(() =>{
  
const date = new Date().getTime()
const diff = newDate - date

// const month =  Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
const hours =  Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      const secondsElement =  document.querySelector(".seconds");
      const minutesElements =  document.querySelector(".minutes");
      const hoursElemets =  document.querySelector(".hours");
      const daysElemets = document.querySelector(".days")

      if(seconds < 10){
        secondsElement.innerHTML = '0' + seconds
      }else{
        secondsElement.innerHTML = seconds
      }

      if(minutes < 10){
        minutesElements.innerHTML = '0' + minutes
      }else{
        minutesElements.innerHTML = minutes
      }

      if(hours < 10){
        hoursElemets.innerHTML = '0' + hours
      }else{
        hours.innerHTML = hours
      }

      if(days < 10){
        daysElemets.innerHTML = '0' + days
      }else{
        daysElemets.innerHTML = days
      }


                          
if(diff <= 0){
  clearInterval(countdown) 
        document.querySelector(".countdown").innerHTML = 'Happy Birthday'
}

}, 1000)



function updateProgress() {
    var defineValue = parseInt(document.getElementById("defineValue").value);
    var reachValue = parseInt(document.getElementById("reachValue").value);
    var progress = (defineValue / reachValue) * 100;
    document.getElementById("myProgress").style.width = progress + "%";
    document.getElementById("myProgress").innerHTML = progress + "%";
  }



  function copyToClipboard() {
    /* Get the text field */
    var input = document.getElementById("dummyInput");
  
    /* Select the text field */
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + input.value);
  }


  $(document).ready(function(){
    // Set the countdown time to 5 minutes
    const countdownTime = 5 * 60; // 5 minutes in seconds
    let startTime;
      
    // Function to update the timer display
    function updateTimer() {
      const timerDisplay = document.getElementById('timer');
      let remainingTime = countdownTime - Math.floor((Date.now() - startTime) / 1000);
    
      if (remainingTime < 0) {
        timerDisplay.textContent = "Time's up!";
        clearInterval(timerInterval);
        return;
      }
    
      const days = Math.floor(remainingTime / (24 * 60 * 60));
      remainingTime %= (24 * 60 * 60);
      const hours = Math.floor(remainingTime / (60 * 60));
      remainingTime %= (60 * 60);
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      timerDisplay.textContent = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Initial call to update the timer
    updateTimer();
    
    // Start time of the countdown
    startTime = Date.now();
    
    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);
  });



  $(document).ready(function(){
    $('.qr-btn').click(function(){
        $('.qr-img').toggleClass('qr-img-show')
    })
  })



//  $(document).ready(function(){
//   $('.pay_btn').click(function(){
//     $('.modal.fade').hide()
//   })
//  })
//  $(document).ready(function(){
//   $('.pay_btn').click(function(){
//     $('.modal-backdrop.show').hide()
//   })
//  })

var div = document.getElementById('main');
var display = 0;

function hideshow(){
  if(display == 1){
    div.style.display = 'block';
    display = 0;
  }else{
    div.style.display = 'none';
    display = 1;
  }
}