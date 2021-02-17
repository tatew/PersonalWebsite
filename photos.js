
const pics = [
    {filename: "LaneWinter.JPG", caption: "Lane Stadium in the snow", camera: "iPhone 11", date: "January 2021"},
    {filename: "TruckOnBeach.JPG", caption: "The Gladiator on the beach during golden hour", camera: "iPhone 11", date: "December 2020"},
    {filename: "DJI_0099.jpg", caption: "Jeeps on the beach in the Outer Banks", camera: "DJI Mavic 2", date: "December 2020"},
    {filename: "DJI_0101.jpg", caption: "Checking out the terrain", camera: "DJI Mavic 2", date: "December 2020"},
    {filename: "DJI_0104.jpg", caption: "In the in the drone zone at the beach", camera: "DJI Mavic 2", date: "December 2020"}
];

window.addEventListener("load", () => loadPics(), false);

function loadPics() {
    const picsEl = document.getElementById("pics");
    pics.forEach(pic => {
        const div = document.createElement("div");
        div.setAttribute("class", "image");
        picsEl.appendChild(div);
        
        const img = document.createElement("img");
        img.setAttribute("src", `pics/${pic.filename}`);
        div.appendChild(img);

        const captionDiv = document.createElement("div");
        captionDiv.setAttribute("class", "captionDiv");
        div.appendChild(captionDiv);

        const caption = document.createElement("p");
        caption.setAttribute("class", "caption");
        caption.innerHTML = pic.caption;
        captionDiv.appendChild(caption);

        const date = document.createElement("p");
        date.setAttribute("class", "date");
        date.innerHTML = `Date: ${pic.date}`;
        captionDiv.appendChild(date);

        const camera = document.createElement("p");
        camera.setAttribute("class", "camera");
        camera.innerHTML = `Camera: ${pic.camera}`;
        captionDiv.appendChild(camera);
        
    });
}



