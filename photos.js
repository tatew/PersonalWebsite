
const pics = [
    {filename: "DJI_0099.jpg", caption: "Jeeps on the beach in the Outer Banks"},
    {filename: "DJI_0101.jpg", caption: "Checking out the terrain"}
];

window.addEventListener("load", () => loadPics(), false);

function loadPics() {
    const picsEl = document.getElementById("pics");
    pics.forEach(pic => {
        const img = document.createElement("img");
        const caption = document.createElement("p");
        caption.setAttribute("class", "caption")
        img.setAttribute("src", `pics/${pic.filename}`);
        caption.innerHTML = pic.caption;
        picsEl.appendChild(img);
        picsEl.appendChild(caption);
    });
}



