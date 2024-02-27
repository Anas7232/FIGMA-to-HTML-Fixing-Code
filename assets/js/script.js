// Function to update countdown display
function updateCountdown() {
  const newDate = new Date("07-13-2024 09:00:00").getTime();
  const currentDate = new Date().getTime();
  const difference = newDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector(".seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
  document.querySelector(".minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.querySelector(".hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.querySelector(".days").textContent = days
    .toString()
    .padStart(2, "0");

  if (difference <= 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").textContent = "Sales Ended";
  }
}

// Initial call to update countdown immediately
updateCountdown();

// Update countdown every second
const countdown = setInterval(updateCountdown, 1000);

// range slider
// document.addEventListener("DOMContentLoaded", function () {
//   const sliderEl = document.querySelector("#range");
//   const sliderValue = document.querySelector("#value");

//   sliderEl.addEventListener("input", (event) => {
//     const tempSliderValue = event.target.value;

//     // sliderValue.textContent = tempSliderValue;

//     const progress = (tempSliderValue / sliderEl.max) * 100;

//     sliderEl.style.background = `linear-gradient(to right, #3BBAF8 ${progress}%, #fff ${progress}%)`;
//   });
// });

const sliderEl = document.querySelector("#range");

function progressScript() {
  const sliderValue = sliderEl.value;
  sliderEl.style.background = `linear-gradient(to right, #3BBAF8 ${sliderValue}%, #fff ${sliderValue}%)`;
}

progressScript();

// status  buttons
document.addEventListener("DOMContentLoaded", function () {
  const toggleTab = document.getElementById("toggle-tab");
  const verificationContent = document.getElementById("Verification");
  const otherContent = document.getElementById("otherContent");

  toggleTab.addEventListener("click", function () {
    if (verificationContent.style.display !== "none") {
      verificationContent.style.display = "none";
      otherContent.style.display = "block";
    } else {
      verificationContent.style.display = "block";
      otherContent.style.display = "none";
    }
  });
});

// copy Button
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}




$(document).ready(function(){
  $('.profile').click(function(){
      $('.user-dropdown').toggleClass('user-show');
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const copyIcon = document.querySelector('.copy-icon');
  const link = document.querySelector('.ref');

  copyIcon.addEventListener('click', function() {
      // Create a textarea element to hold the text temporarily
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = link.textContent; // Set the value to the link's text content
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy'); // Copy the selected text
      document.body.removeChild(tempTextArea); // Clean up: remove the textarea
      alert('Link copied to clipboard');
  });
});


$(document).ready(function(){
  new Chart(document.getElementById("chartjs-0"), {
    type: "line",
    data: {
      labels: [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN",
      ],
      datasets: [
        {
          label: "Views",
          data: [4000, 501, 1700, 305, 1500, 900, 3566],
          fill: true,
          borderColor: "#0ABE52",
          lineTension: 0.4,
          pointBorderColor: "#0ABE52",
          backgroundColor:"#0CAE4D4F",
          spanGaps: true
        }
      ]
    },
    options: {
      legend: {
        labels: {
          fontColor: "#000",
          fontSize: 14
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "#000"
            },
            gridLines: {
              display: true,
              color: "lightgray"
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "#000"
            },
            gridLines: {
              display: true,
              color: "lightgray",
            }
          }
        ]
      }
    }
  });
})


let usersSection = document.querySelector(".main_section");

function showHider(){
  usersSection.style.display = 'none'
}

const divContainer = document.querySelector('#mainsection');

let showHide = function(){
  divContainer.style.display = 'block'
}