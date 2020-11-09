const phrase =
    "Destruction is a form of creation.";
const element = document.querySelector(".site-title");
for (let i = 0; i < phrase.length; i++) {
    setTimeout(() => {
        element.innerHTML += phrase[i];
    }, i * 100);
}
