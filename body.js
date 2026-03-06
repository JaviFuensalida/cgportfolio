import {header} from './elements/header.js';
import {menu} from './elements/menu.js';
import {footer} from './elements/footer.js';
import { projectContainer } from './elements/projectContainer.js';
import { galleryPortraitChus } from './elements/galleryPortraitChus.js';
import { galleryPortraitSofia } from './elements/galleryPortraitSofia.js';
import { galleryPortraitIrina } from './elements/galleryPortraitIrina.js';


const body = document.getElementById('body');



const template = (pageContent) => {
body.innerHTML = '';

body.innerHTML += header;

body.innerHTML += menu;

body.innerHTML += pageContent;

body.innerHTML += footer;
}


template(projectContainer);
window.addEventListener("hashchange", (event) => { 
 if (location.hash === "#portrait-chus") {
       template(galleryPortraitChus); 
    } else if (location.hash !== "#portrait-sofia") {
       template(galleryPortraitSofia);
    } else if (location.hash !== "#portrait-irina") {
       template(galleryPortraitIrina);
    }
});


