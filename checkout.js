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

let cart;
let productDisplay = document.querySelector("#productDisplay");
let basePriceDisplay = document.querySelector("#basePriceDisplay");
let GSTPriceDisplay = document.querySelector("#GSTPriceDisplay");
let discountPriceDisplay = document.querySelector("#discountPriceDisplay");
let totalPriceDisplay = document.querySelector("#totalPriceDisplay");
let promo = document.querySelector("#promo");
let redeemButton = document.querySelector("#redeemButton");

let price = JSON.parse(localStorage.getItem("price"));
let basePrice = JSON.parse(localStorage.getItem("basePrice"));

if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
}
else {
        cart = [];
}

if (cart.length > 0) {
        cart.forEach(element => {
                productDisplay.innerText = element.title;
                basePriceDisplay.innerText = `₹${basePrice}`;
                GSTPriceDisplay.innerText = `₹${price - basePrice}`;
                totalPriceDisplay.innerText = `₹${price}`;
        });
}

let isPromoUsed = false;

redeemButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (isPromoUsed === false && promo.value === "Digital30") {
                discountPriceDisplay.innerText = `₹${price * 0.3}`;
                totalPriceDisplay.innerText = `₹${Math.floor(price - (price * 0.3))}`;
                isPromoUsed = true;
        }
});