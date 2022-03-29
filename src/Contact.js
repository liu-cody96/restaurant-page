export default function loadContact() {
    const content = document.getElementById("content");
    if (content) {
        content.remove();
    }

    const element = document.createElement('div');
    element.id = "content";
    element.classList.add("content");

    element.innerHTML = "we have no contact"

    document.body.appendChild(element);

}
