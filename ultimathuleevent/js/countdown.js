// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="mycountdown"
    document.getElementById("mycountdown").innerHTML = days + "D" + ('0' + hours).slice(-2) + "H" + ('0' + minutes).slice(-2) + "M" + ('0' + seconds).slice(-2) + "S";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("mycountdown").innerHTML = "EXPIRED";



    }
}, 1000);