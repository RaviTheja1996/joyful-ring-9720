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


let BasicCartButton = document.getElementById("BasicCartButton");
let ProCartButton = document.getElementById("ProCartButton");
let EnterpriseCartButton = document.getElementById("EnterpriseCartButton");
let cart;

if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
}
else {
        cart = [];
}

BasicCartButton.addEventListener("click", function (e) {
        let obj = {};
        obj.id = 1;
        obj.title = "Mobile App Services";
        obj.calendarScreen = true;
        obj.notificationsScreen = true;
        obj.newsScreen = true;
        obj.supportScreen = true;
        obj.homeScreen = true;
        obj.securityScreen = false;
        obj.themesScreen = false;
        obj.dashboardScreen = false;
        obj.chatScreen = false;
        obj.financeScreen = false;
        obj.collaborationToolsScreen = false;
        let flag = true;
        if (cart.length > 0) {
                cart.forEach(element => {
                        if (element.id === 1) {
                                flag = false;
                        }
                });
        }
        if (cart.length > 0) {
                cart = [];
                cart.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart));
        }
        else {
                cart.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart));
        }
        window.location.href = "./cart.html";
});

ProCartButton.addEventListener("click", function (e) {
        let obj = {};
        obj.id = 2;
        obj.title = "Website Development Services";
        obj.AboutPage = true;
        obj.ContactPage = true;
        obj.HomePage = true;
        obj.DashboardPage = true;
        obj.userPage = true;
        obj.responsiveness = true;
        obj.productServicesPage = false;
        obj.careerServicesPage = false;
        obj.investorServicesPage = false;
        obj.downloadServicesPage = false;
        obj.socialMediaServicesPage = false;
        obj.securityPage = false;
        let flag = true;
        if (cart.length > 0) {
                cart.forEach(element => {
                        if (element.id === 2) {
                                flag = false;
                        }
                });
        }
        if (cart.length > 0) {
                cart = [];
                cart.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart));
        }
        else {
                cart.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart));
        }
        window.location.href = "./cart.html";
});

EnterpriseCartButton.addEventListener("click", function (e) {
        let obj = {};
        obj.id = 3;
        obj.title = "Website and Mobile App Services";
        obj.calendarScreen = true;
        obj.notificationsScreen = true;
        obj.newsScreen = true;
        obj.supportScreen = true;
        obj.homeScreen = true;
        obj.AboutPage = true;
        obj.ContactPage = true;
        obj.HomePage = true;
        obj.DashboardPage = true;
        obj.userPage = true;
        obj.responsiveness = true;
        obj.securityPage = true;
        obj.securityScreen = true;
        obj.productServicesPage = false;
        obj.careerServicesPage = false;
        obj.investorServicesPage = false;
        obj.downloadServicesPage = false;
        obj.socialMediaServicesPage = false;
        obj.themesScreen = false;
        obj.dashboardScreen = false;
        obj.chatScreen = false;
        obj.financeScreen = false;
        obj.collaborationToolsScreen = false;
        let flag = true;
        if (cart.length > 0) {
                cart = [];
                cart.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart));
        }
        else {
                cart.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart));
        }
        window.location.href = "./cart.html";
});