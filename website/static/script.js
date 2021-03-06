// Get elements
var row = document.getElementById("row");
var heading = document.getElementById("heading");
var strapline = document.getElementById("strapline");

// Fonts array
var fonts = ['Droid-Sans','Arvo','Corben','Lobster','Droid-Serif','Raleway','Goudy-Bookletter-1911','Abril-Fatface','Yanone-Kaffeesatz','Hammersmith-One','Lato','PT-Sans-Narrow','Open-Sans','Open-Sans-Condensed','Old-Standard-TT','Merriweather','Montserrat','Roboto','Titillium-Web','Karla','Oswald','Glegoo','Vollkorn','Courgette','Abel','Sniglet','Ubuntu','PT-Sans','PT-Serif','PT-Mono','Times-New-Roman','Tahoma','Trebuchet','Verdana','Palatino','Impact','Helvetica','Myriad-Pro','Georgia','Futura','Courier-New','Arial'];

// Randomise styles
var randHeading = fonts[Math.floor(Math.random() * fonts.length)];
var randStrapline = fonts[Math.floor(Math.random() * fonts.length)];
var randImage = "./static/coffeeordeath.png"


// Apply random styles
row.style.color = randomColor({luminosity: 'light'});
// row.style.color = "rgb(164, 239, 127)";
row.style.color = "rgb(249, 241, 147)"; // my favourite today
row.style.backgroundColor = randomColor({luminosity: 'dark'});
// row.style.backgroundColor = "rgb(7, 110, 119)";
row.style.backgroundColor = "rgb(4, 99, 104)"; // my favourite today
row.style.backgroundImage = "url(" + randImage + ")";

heading.setAttribute("class", randHeading);
strapline.setAttribute("class", randStrapline);