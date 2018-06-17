 // DOM element where the Timeline will be attached
 var container = document.getElementById('visualization');

 // Create a DataSet (allows two way data-binding)
 var items = new vis.DataSet([
     {
         id: 1,
         content: 'Lift off from Cape Canaveral',
         start: '2006-01-19'
            },
     {
         id: 2,
         content: 'Jupiter',
         start: '2007-02-01'
            },
     {
         id: 3,
         content: 'Pluto, 6 months study',
         start: '2015-02-01',
            },
     {
         id: 4,
         content: 'Pluto, closest approuch',
         start: '2015-07-14',

            },
     {
         id: 5,
         content: 'Ultima Thule',
         start: '2018-12-31'
            },

  ]);

 // Configuration for the Timeline
 var options = {
     start: '2005-11-31',
     end: '2019-03-01',
 };


 // Create a Timeline
 var timeline = new vis.Timeline(container, items, options);

 timeline.on('click', function (properties) {
     horizon = document.getElementById("myhorizon");

     if (properties.item == 2) {

         if (document.body.contains(document.getElementById('nhcardarticle'))) {
             var elem3 = document.getElementById("nhcardarticle");
             elem3.remove();
         }

         requestAnimationFrame(function () {
             // assume that bar should complete final 50% in 10s
             horizon.style.transition = "all 1s linear";
             horizon.style.left = "50%";
             horizon.style.top = "75%";
         });

         setTimeout(function () {
             myarticlebox2();
         }, 1000);

         function myarticlebox2() {
             const horizonbox = document.getElementById('myhorizon');

             const nhcardarticle = document.createElement('article');
             nhcardarticle.setAttribute('class', 'nhcardarticle');
             nhcardarticle.setAttribute('id', 'nhcardarticle');

             // Create an h3 and set the text content to the film's title
             const h3 = document.createElement('h3');
             h3.setAttribute('id', 'jupiterh3');
             h3.textContent = "Jupiter Feb 2007";

             const p = document.createElement('p');
             p.setAttribute('id', 'jupiterp');
             p.textContent = "New Horizons gets a gravity assist from Jupiter and gathers unique, exciting science data on the giantplanet and its moons.";

             horizonbox.appendChild(nhcardarticle);
             nhcardarticle.appendChild(h3);
             nhcardarticle.appendChild(p);
         }

     } else if (properties.item == 3) {
         if (document.body.contains(document.getElementById('nhcardarticle'))) {
             var elem3 = document.getElementById("nhcardarticle");
             elem3.remove();
         }

         requestAnimationFrame(function () {
             // assume that bar should complete final 50% in 10s
             horizon.style.transition = "all 2s linear";
             horizon.style.left = "92%";
             horizon.style.top = "32.5%";
         });

         setTimeout(function () {
             myarticlebox3();
         }, 1000);

         function myarticlebox3() {

             const horizonbox = document.getElementById('myhorizon');

             const nhcardarticle = document.createElement('article');
             nhcardarticle.setAttribute('class', 'nhcardarticle left-offset');
             nhcardarticle.setAttribute('id', 'nhcardarticle');

             // Create an h3 and set the text content to the film's title
             const h3 = document.createElement('h3');
             h3.textContent = "Early 2015";

             const p = document.createElement('p');
             p.textContent = "Exploration of the Pluto system begins with a 6-month intensive study to understand these mysterious worlds.";

             horizonbox.appendChild(nhcardarticle);
             nhcardarticle.appendChild(h3);
             nhcardarticle.appendChild(p);
         }


     } else if (properties.item == 4) {
         if (document.body.contains(document.getElementById('nhcardarticle'))) {
             var elem3 = document.getElementById("nhcardarticle");
             elem3.remove();
         }

         requestAnimationFrame(function () {
             // assume that bar should complete final 50% in 10s
             horizon.style.transition = "all 2s linear";
             horizon.style.left = "92%";
             horizon.style.top = "31.5%";
         });

         setTimeout(function () {
             myarticlebox4();
         }, 2000);

         function myarticlebox4() {

             const horizonbox = document.getElementById('myhorizon');

             const nhcardarticle = document.createElement('article');
             nhcardarticle.setAttribute('class', 'nhcardarticle left-offset');
             nhcardarticle.setAttribute('id', 'nhcardarticle');

             // Create an h3 and set the text content to the film's title
             const h3 = document.createElement('h3');
             h3.textContent = "Pluto Jul 2015";

             const p = document.createElement('p');
             p.textContent = "New Horizons gets a gravity assist from Jupiter and gathers unique, exciting science data on the giantplanet and its moons.";

             horizonbox.appendChild(nhcardarticle);
             nhcardarticle.appendChild(h3);
             nhcardarticle.appendChild(p);
         }

     } else if (properties.item == 5) {

         if (document.body.contains(document.getElementById('nhcardarticle'))) {
             var elem3 = document.getElementById("nhcardarticle");
             elem3.remove();
         }

         requestAnimationFrame(function () {
             // assume that bar should complete final 50% in 10s
             horizon.style.transition = "all 2s linear";
             horizon.style.left = "95.5%";
             horizon.style.top = "28%";
         });

         setTimeout(function () {
             myarticlebox5();
         }, 2000);

         function myarticlebox5() {

             const horizonbox = document.getElementById('myhorizon');

             const nhcardarticle = document.createElement('article');
             nhcardarticle.setAttribute('class', 'nhcardarticle left-offset');
             nhcardarticle.setAttribute('id', 'nhcardarticle');

             // Create an h3 and set the text content to the film's title
             const h3 = document.createElement('h3');
             h3.textContent = "Ultima Thule, Dec 31 2018";

             const p = document.createElement('p');
             p.textContent = "NASA’s New Horizons spacecraft will buzz by the most primitive and most distant object ever explored. New Horizons’ encounter with Kuiper Belt object 2014 MU69 (now known as Ultima Thule), which orbits a billion miles beyond Pluto, will offer the first close-up look at such a pristine building block of the solar system – and will be performed in a region of deep space that was practically unknown just a generation ago.";

             horizonbox.appendChild(nhcardarticle);
             nhcardarticle.appendChild(h3);
             nhcardarticle.appendChild(p);
         }


     } else if (properties.item == 1) {

         if (document.body.contains(document.getElementById('nhcardarticle'))) {
             var elem3 = document.getElementById("nhcardarticle");
             elem3.remove();
         }

         requestAnimationFrame(function () {
             // assume that bar should complete final 50% in 10s
             horizon.style.transition = "all 2s linear";
             horizon.style.left = "27.5%";
             horizon.style.top = "74%";
         });

         setTimeout(function () {
             myarticlebox1();
         }, 2000);

         function myarticlebox1() {

             const horizonbox = document.getElementById('myhorizon');

             const nhcardarticle = document.createElement('article');
             nhcardarticle.setAttribute('class', 'nhcardarticle');
             nhcardarticle.setAttribute('id', 'nhcardarticle');

             // Create an h3 and set the text content to the film's title
             const h3 = document.createElement('h3');
             h3.textContent = "Earth, Jan 19 2006";

             const p = document.createElement('p');
             p.textContent = "New Horizons spacecraft lifts off from Cape Canaveral, Florida";

             horizonbox.appendChild(nhcardarticle);
             nhcardarticle.appendChild(h3);
             nhcardarticle.appendChild(p);
         }

     } else {
         console.log('click', properties.item);
     }

 });