window.onscroll = function() {myFunction()};
var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;
function myFunction() {
  if (window.pageYOffset >= sticky + navbar_height) {
    navbar_sticky.classList.add("sticky")
	document.body.style.paddingTop = navbar_height + 'px';
  } else {
    navbar_sticky.classList.remove("sticky");
	document.body.style.paddingTop = '0'
  }
}


$(document).ready(function () { 
            $('.dropdown').hover(function () { 
                $(this).addClass('show'); 
                $(this).find('.dropdown-menu').addClass('show'); 
            }, function () { 
                $(this).removeClass('show'); 
                $(this).find('.dropdown-menu').removeClass('show'); 
            }); 
        }); 


const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Collapse the navbar by removing 'show' class or using Bootstrap's collapse method
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide(); // Use Bootstrap's built-in method to collapse
      }
    });
  });


  let isPlaying = false;


  const backgroundMusic = document.getElementById('background-music');
  const muteButton = document.getElementById('mute-button');
  backgroundMusic.volume = 0.3;

  // Add event listener to the mute/unmute button
muteButton.addEventListener('click', () => {
  playMusic();
});

function playMusic() {
  // Check if the music is already playing
  if (!isPlaying) {
    // Attempt to play the audio when the user interacts with the button
    backgroundMusic.play()
      .then(() => {
        isPlaying = true; // Set the playing flag to true
        backgroundMusic.muted = false; // Unmute the audio
        muteButton.textContent = '🔊'; // Change button icon to 'mute' icon
      })
      .catch(error => {
        console.error('Music playback failed:', error); // Log any errors
      });
  } else {
    // Toggle mute/unmute and update button icon
    if (backgroundMusic.muted) {
      backgroundMusic.muted = false; // Unmute the audio
      muteButton.textContent = '🔊'; // Show 'mute' icon
    } else {
      backgroundMusic.muted = true; // Mute the audio
      muteButton.textContent = '🔇'; // Show 'unmute' icon
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const openButton = document.getElementById('openButton');
  const mainContent = document.getElementById('mainContent');

  // Handle the button click to open the envelope and hide the overlay
  openButton.addEventListener('click', () => {
    
    // Hide overlay after animation
    setTimeout(() => {
      overlay.style.opacity = 0;
      overlay.style.pointerEvents = 'none';
      
      // Show the main content
      mainContent.style.opacity = 1;
    }, 500); // Duration matches the flap's rotation time

    playMusic();

  });
});


  // Optional: Start music playback when the page is fully loaded
  // window.addEventListener('load', () => {
  //   backgroundMusic.play().catch(error => {
  //     console.error('Music playback was prevented:', error);
  //   });
  // });
