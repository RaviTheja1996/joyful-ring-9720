import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        orientation: "block",
        scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
        {
                transform: ["scaleX(0)", "scaleX(1)"],
        },
        {
                duration: 1,
                timeline: scrollTrackingTimeline,
        }
);

let services = [
        {
                Name: "Mobile Package",
                description: "We provide robust, responsive and innovative mobile app development for your company.",
                price: 30000
        },
];

let ProCartButton = document.getElementById("ProCartButton");
let EnterpriseCartButton = document.getElementById("EnterpriseCartButton");
let cart;

if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
}
else {
        cart = [];
}

ProCartButton.addEventListener("click", function (e) {

});