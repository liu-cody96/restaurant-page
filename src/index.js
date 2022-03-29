import loadHome from './Home.js';
import loadMenu from './Menu.js';
import loadContact from './Contact.js';

import './style.css';


function createNavBar() {
    const navBar = document.createElement('header');
    navBar.id = "tab-navbar";

    const homeTab = document.createElement('button');
    homeTab.classList.add("tab-link");
    homeTab.innerText = "Home";
    homeTab.addEventListener("click", loadHome)


    const menuTab = document.createElement('button');
    menuTab.classList.add("tab-link");
    menuTab.innerText = "Menu";
    menuTab.addEventListener("click", loadMenu)

    const contactTab = document.createElement('button');
    contactTab.classList.add("tab-link");
    contactTab.innerText = "Contact";
    contactTab.addEventListener("click", loadContact);

    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);

    return navBar;
}


document.body.appendChild(createNavBar());
