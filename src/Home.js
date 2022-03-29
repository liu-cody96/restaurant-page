import Boba from './cute_boba.png';

export default function loadHome() {
    const content = document.getElementById("content");
    if (content) {
        content.remove();
    }

    const element = document.createElement('div');
    element.id = "content";
    element.classList.add('content');

    const titleContainer = document.createElement('div');
    titleContainer.id = "title-container";

    const title = document.createElement('div');

    title.innerText = "Boba DynasTea";

    title.classList.add("title");
    titleContainer.appendChild(title);

    const cuteBoba = document.createElement('div');
    cuteBoba.classList.add('cute-boba');
    const cuteBobaImg = new Image();
    cuteBobaImg.src = Boba;
    cuteBoba.appendChild(cuteBobaImg);
    titleContainer.appendChild(cuteBoba);

    element.appendChild(titleContainer);

    const headline = document.createElement('div');
    headline.innerHTML = "There was the Ming Dynasty, then the Qing Dynasty, and now...The Boba DynasTea. We are a Taiwanese-style café that specializes in freshly made bubble tea. Our tea is made with high quality ingredients that are locally sourced. We are committed to serving the best bubble tea in the world while giving back to the environment. For every bubble tea you buy, we donate 15% of proceeds to charity.";
    headline.classList.add("dynastea-description");
    element.appendChild(headline);



    document.body.appendChild(element);

}
