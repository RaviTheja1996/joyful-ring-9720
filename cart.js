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

let cartBody = document.getElementById("cartBody");
let productsPriceDisplay = document.getElementById("productsPriceDisplay");
let GSTPriceDisplay = document.getElementById("GSTPriceDisplay");
let cartTotalPriceDisplay = document.getElementById("cartTotalPriceDisplay");
let checkoutButton = document.getElementById("checkoutButton");

let cart;
if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
}
else {
        cart = [];
}

checkoutButton.addEventListener("click", function (e) {
        if (cart.length > 0) {
                window.location.href = "./checkout.html";
        }
        else {
                alert("Your cart is empty please add pricing plan to cart first");
        }
});

display();

function display() {
        cartBody.innerHTML = "";
        let div = document.createElement("div");
        div.setAttribute("class", "card mb-4 rounded-3 shadow-lg");
        div.style.width = "80%";
        div.style.margin = "auto";
        // div.style.textAlign = "center";
        if (cart.length > 0) {
                cart.forEach(element => {
                        let totalPrice;
                        if (element.id === 1) {
                                totalPrice = 30000;
                        }
                        else if (element.id === 2) {
                                totalPrice = 70000;
                        }
                        else if (element.id === 3) {
                                totalPrice = 100000;
                        }
                        productsPriceDisplay.innerText = `₹${totalPrice}`;

                        let divHeader = document.createElement("div");
                        divHeader.setAttribute("class", "card-header py-3");
                        divHeader.style.backgroundColor = "green";
                        divHeader.style.color = "white";

                        let h5 = document.createElement("h5");
                        h5.setAttribute("class", "mb-0 card-title pricing-card-title text-center");
                        h5.innerText = element.title;
                        divHeader.append(h5);
                        div.append(divHeader);

                        let defaultFeatures = document.createElement("h5");
                        defaultFeatures.innerText = "Default Features";
                        defaultFeatures.style.marginTop = "2%";
                        defaultFeatures.style.marginLeft = "3%";
                        defaultFeatures.setAttribute("class", "text-center");
                        let hr = document.createElement("hr");
                        hr.style.marginBottom = 0;
                        div.append(hr);
                        div.append(defaultFeatures);
                        let hr2 = document.createElement("hr");
                        hr2.setAttribute("class", "my-3");
                        div.append(hr2);

                        let ul = document.createElement("ul");
                        ul.setAttribute("class", "mb-4");
                        for (let key in element) {
                                if (element[key] === true) {
                                        let li = document.createElement("li");
                                        li.innerText = key;
                                        ul.append(li);
                                }
                        }
                        div.append(ul);

                        let additionalFeatures = document.createElement("h5");
                        additionalFeatures.innerText = "Additional Features";
                        // additionalFeatures.style.marginBottom = "3%";
                        additionalFeatures.style.marginLeft = "3%";
                        additionalFeatures.setAttribute("class", "text-center");
                        let hr3 = document.createElement("hr");
                        div.append(hr3);
                        div.append(additionalFeatures);
                        let hr4 = document.createElement("hr");
                        div.append(hr4);

                        let ulAdd = document.createElement("ul");
                        ulAdd.setAttribute("class", "mb-4");
                        for (let key in element) {
                                if (element[key] === false) {
                                        let li = document.createElement("li");
                                        li.innerText = key;
                                        let chk = document.createElement("input");
                                        chk.type = "checkbox";
                                        chk.setAttribute("class", "form-check-input");
                                        chk.style.position = "absolute";
                                        chk.style.marginLeft = "32%";
                                        let price = document.createElement("p");
                                        price.setAttribute("class", "mb-0");
                                        price.style.position = "absolute";
                                        price.style.marginLeft = "37%";
                                        switch (key) {
                                                case 'securityScreen':
                                                        {
                                                                price.innerText = '(₹5000)';
                                                                break;
                                                        }
                                                case 'themesScreen':
                                                        {
                                                                price.innerText = '(₹1000)';
                                                                break;
                                                        }
                                                case 'dashboardScreen':
                                                        {
                                                                price.innerText = '(₹2000)';
                                                                break;
                                                        }
                                                case 'chatScreen':
                                                        {
                                                                price.innerText = '(₹1000)';
                                                                break;
                                                        }
                                                case 'financeScreen':
                                                        {
                                                                price.innerText = '(₹3000)';
                                                                break;
                                                        }
                                                case 'collaborationToolsScreen':
                                                        {
                                                                price.innerText = '(₹1000)';
                                                                break;
                                                        }
                                                case 'productServicesPage':
                                                        {
                                                                price.innerText = '(₹1000)';
                                                                break;
                                                        }
                                                case 'careerServicesPage':
                                                        {
                                                                price.innerText = '(₹2000)';
                                                                break;
                                                        }
                                                case 'investorServicesPage':
                                                        {
                                                                price.innerText = '(₹2000)';
                                                                break;
                                                        }
                                                case 'downloadServicesPage':
                                                        {
                                                                price.innerText = '(₹1000)';
                                                                break;
                                                        }
                                                case 'socialMediaServicesPage':
                                                        {
                                                                price.innerText = '(₹2000)';
                                                                break;
                                                        }
                                                case 'securityPage':
                                                        {
                                                                price.innerText = '(₹5000)';
                                                                break;
                                                        }
                                        }
                                        let flex = document.createElement("div");
                                        flex.style.display = "flex";
                                        flex.style.gap = "2%";

                                        chk.addEventListener("change", function (e) {
                                                let length = price.innerText.length;
                                                if (this.checked === true) {
                                                        totalPrice += Number(price.innerText.substring(2, length - 1));
                                                        productsPriceDisplay.innerText = `₹${totalPrice}`;
                                                        GSTPriceDisplay.innerText = `₹${Math.floor(totalPrice * 0.18)}`;

                                                        cartTotalPriceDisplay.innerText = `₹${totalPrice + Math.floor(totalPrice * 0.18)}`;
                                                        localStorage.setItem("basePrice", JSON.stringify(totalPrice));
                                                        localStorage.setItem("price", JSON.stringify(totalPrice + Math.floor(totalPrice * 0.18)));
                                                }
                                                else if (this.checked === false) {
                                                        console.log(price.innerText.substring(2, length - 1));
                                                        totalPrice -= Number(price.innerText.substring(2, length - 1));
                                                        productsPriceDisplay.innerText = `₹${totalPrice}`;
                                                        GSTPriceDisplay.innerText = `₹${Math.floor(totalPrice * 0.18)}`;

                                                        cartTotalPriceDisplay.innerText = `₹${totalPrice + Math.floor(totalPrice * 0.18)}`;
                                                        localStorage.setItem("basePrice", JSON.stringify(totalPrice));
                                                        localStorage.setItem("price", JSON.stringify(totalPrice + Math.floor(totalPrice * 0.18)));
                                                }
                                        });

                                        // console.log(totalPrice);

                                        flex.append(li);
                                        flex.append(chk);
                                        flex.append(price);
                                        ulAdd.append(flex);
                                }
                        }
                        div.append(ulAdd);

                        let deleteButton = document.createElement("button");
                        deleteButton.setAttribute("class", "btn customDeleteButtonWidth");
                        deleteButton.innerText = "Delete";
                        // deleteButton.style.borderRadius = "100vmax";
                        deleteButton.style.color = "white";

                        deleteButton.addEventListener("click", function (e) {
                                cart = [];
                                localStorage.setItem("cart", JSON.stringify(cart));
                                display();
                        });
                        div.append(deleteButton);

                        cartBody.append(div);

                        GSTPriceDisplay.innerText = `₹${Math.floor(totalPrice * 0.18)}`;

                        let price = totalPrice + Math.floor(totalPrice * 0.18);
                        cartTotalPriceDisplay.innerText = `₹${price}`;
                        localStorage.setItem("basePrice", JSON.stringify(totalPrice));
                        localStorage.setItem("price", JSON.stringify(price));

                });

        }
        else {
                let div = document.createElement("div");
                let h5 = document.createElement("h5");
                h5.setAttribute("class", "mb-0");
                h5.innerText = "Your Cart is Empty";
                div.append(h5);
                cartBody.append(div);
                productsPriceDisplay.innerText = '₹0';
                GSTPriceDisplay.innerText = '₹0';
                cartTotalPriceDisplay.innerText = '₹0';
        }
}