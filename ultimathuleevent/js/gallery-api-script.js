const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';

const gallerycontainer = document.createElement('div');
gallerycontainer.setAttribute('class', 'gallerycontainer');

//app.appendChild(logo);
app.appendChild(gallerycontainer);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://images-api.nasa.gov/search?keywords=new%20horizons', true);

request.onload = function () {
    // Begin accessing JSON data here
    var datacollection = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        datacollection.collection.items.forEach(movie => {

            // Create a div with a gallerycard class
            const gallerycard = document.createElement('div');
            gallerycard.setAttribute('class', 'gallerycard');

            const gallerycardarticle = document.createElement('article');
            gallerycardarticle.setAttribute('class', 'gallerycardarticle');

            const imglink = document.createElement('a');
            imglink.href = movie.links[0].href.replace("thumb", "orig");

            const gallerycardimage = document.createElement('img');
            gallerycardimage.src = movie.links[0].href;


            // Create an h4 and set the text content to the film's title
            const h4 = document.createElement('h4');
            h4.textContent = movie.data[0].title;

            const p = document.createElement('p');
            movie.data[0].description = movie.data[0].description.substring(0, 2000);
            p.textContent = `${movie.data[0].description}`;



            gallerycontainer.appendChild(gallerycard);
            gallerycard.appendChild(imglink);
            imglink.appendChild(gallerycardimage);
            gallerycard.appendChild(gallerycardarticle);
            gallerycardarticle.appendChild(h4);
            gallerycardarticle.appendChild(p);
        });
    } else {
        console.log('error');
    }
}



// Send request
request.send();