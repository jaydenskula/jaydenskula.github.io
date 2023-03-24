const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['bird.jpg', `bird2.jpg`, `bird3.jpg`, `bird4.jpg`, `bird5.jpg`];

/* Declaring the alternative text for each image file */
const alts = { 
    'bird.jpg' : 'An orange and grey bird',
    'bird2.jpg' : 'A bird who has a black tail and white spots.',
    'bird3.jpg' : 'A black and white bird',
    'bird4.jpg' : 'A tufted tit-tyrant',
    'bird5.jpg': 'A sleeping brown dove',
}

/* Looping through images */
for (const image of images) 
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => 
{
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') 
    {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    else 
    {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
