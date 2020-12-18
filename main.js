// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();
    
  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}:${addZero(min)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/06/05/38/landscape-1802340_1280.jpg')";
    greeting.textContent = 'Good Morning, Sunshine ';

  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/01/28/23/34/landscape-615428_1280.jpg')";
    greeting.textContent = 'Good Afternoon, Superstar';

  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_1280.jpg')";
    greeting.textContent = 'Good Evening, Beautiful';
  }
}

// generate mantra
function genMantra() {
  let randNum = Math.floor(Math.random() * mantras.length);
  document.getElementById('mantra').innerHTML = mantras[randNum];
}

//mantras array
const mantras = [
  '"Be at peace."',
  '"Worry less, smile more."',
  '"Good things take time."',
  '"Believe in yourself."',
  '"You are not alone."',
  '"Help others."',
  '"You are awesome."',
  '"Change your thoughts, change your world."',
  '"Fear less, love more."',
  '"Do it now."',
  '"Act without expectation."',
  '"Nature heals."',
  '"Don\'t worry, be happy."',
  '"Start with optimism."',
  '"Be happy."',
  '"Live consciously."',
  '"Be patient."',
  '"Remember who you are."',
  '"Live life."',
  '"Eat the frog."',
  '"Dream big dreams."',
  '"Find a way!"',
  '"Collect moments, not things."',
  '"Stay true."',
  '"Create every day."',
  '"Care for yourself."',
  '"Stay positive."',
  '"Practice kindness."',
  '"Run your own race."',
  '"Action conquers fear."',
  '"Illuminate the beauty in others."',
  '"Be still."',
  '"Change can happen now."',
  '"Enjoy the present moment."',
  '"Mindset matters."',
  '"Inhale confidence, exhale doubt."',
  '"Yes, you can."',
  '"Be honest."',
  '"Choose joy."',
  '"Be kind."'
];

// Run
showTime();
setBgGreet();