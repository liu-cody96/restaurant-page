export default function loadMenu() {
    const content = document.getElementById("content");
    if (content) {
        content.remove();
    }

    const element = document.createElement('div');
    element.id = "content";
    element.classList.add("content");

    element.innerHTML = "we have no boba"

    document.body.appendChild(element);

}
