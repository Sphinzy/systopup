document.addEventListener("DOMContentLoaded", function() {
    var str = "";
    fetch("assets/JS/bestsell.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                str += `
                    <div class="product-items" tabindex="0">
                        <div class="right">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="left">
                            <span class="price">$${item.price}</span>
                            <span class="title">${item.name}</span>
                            <span class="subtitle">( ${item.subtitle} )</span>
                        </div>
                    </div>
                `;
                console.log(item);
            });

            document.getElementById("bestsell").innerHTML = str;
            document.querySelectorAll(".product-items").forEach((product) => {
                product.onclick = function () {
                    let priceElement = product.querySelector(".price"); // Get price from clicked item
                    let nameElement = product.querySelector(".title"); // Get name from clicked item

                    let totalPriceElement = document.querySelector(".t-price"); // Update total price
                    let modalprice = document.querySelector(".m-price"); // Update modal price
                    let totalName = document.querySelector(".t-item"); // Update total item name

                    console.log("Price Element:", priceElement);
                    console.log("Name Element:", nameElement);
                    console.log("Total Name Element:", totalName);

                    if (totalName) {
                        totalName.innerHTML = nameElement.innerHTML; // Update item name
                    } else {
                        console.error("Element with class '.t-item' not found!");
                    }

                    if (totalPriceElement) {
                        totalPriceElement.innerHTML = priceElement.innerHTML; // Update total price
                    } else {
                        console.error("Element with class '.t-price' not found!");
                    }

                    if (modalprice) {
                        modalprice.innerHTML = priceElement.innerHTML; // Update modal price
                    } else {
                        console.error("Element with class '.m-price' not found!");
                    }
                };
            });
        })
        .catch((error) => console.error("Error loading JSON:", error));
});

    var save="";
    fetch("assets/JS/saving.json")
    .then((response) => response.json())
    .then((data) => {
        let save = "";
        data.forEach((item) => {
            save += `
                <div class="product-items" tabindex="0">
                    <div class="right">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="left">
                        <span class="price">$${item.price}</span>
                        <span class="title">${item.name}</span>
                        <span class="subtitle">( ${item.subtitle} )</span>
                    </div>
                </div>
            `;
        });
        document.getElementById("saving").innerHTML = save;
        document.querySelectorAll(".product-items").forEach((product) => {
            product.onclick = function () {
                let priceElement = product.querySelector(".price"); // Get price
                let totalPriceElement = document.querySelector(".t-price");
                let modalPrice = document.querySelector(".m-price");

                if (priceElement && totalPriceElement && modalPrice) {
                    totalPriceElement.innerHTML = priceElement.innerHTML; // Update cart price
                    modalPrice.innerHTML = priceElement.innerHTML; // Update modal price
                }
            };
        });
    })
    .catch((error) => console.error("Error loading JSON:", error));

    
    let selectedItems = [];

        document.querySelectorAll('.payment').forEach(item => {
            item.addEventListener('click', function () {
                if (!this.classList.contains('selected')) {
                    if (selectedItems.length >= 1) {
                        selectedItems[0].classList.remove('selected'); // Remove the oldest selection
                        selectedItems.shift(); // Remove from array
                    }
                    this.classList.add('selected');
                    selectedItems.push(this); // Store the new selection
                }
            });
        });

        document.querySelectorAll(".product-items").forEach(item => {
            item.addEventListener("click", function () {
                // Remove "active" class from all items
                document.querySelectorAll(".product-items").forEach(p => p.classList.remove("active"));
                
                // Add "active" class to the clicked item
                this.classList.add("active");
            });
        });
        
        document.querySelectorAll(".product-items").forEach((item) => {
            item.onclick = function () {
                let priceElement = item.querySelector(".price"); // Get price from clicked item
                let nameElement = item.querySelector(".title"); // Get name from clicked item
        
                let totalPriceElement = document.querySelector(".t-price"); // Update total price
                let modalprice = document.querySelector(".m-price"); // Update modal price
                let totalName = document.querySelector(".t-item"); // Update total item name
        
                totalName.innerHTML = nameElement.innerHTML; // Update item name
                totalPriceElement.innerHTML = priceElement.innerHTML; // Update total price
                modalprice.innerHTML = priceElement.innerHTML; // Update modal price
            };
        });
        
        document.querySelectorAll(".product-items").forEach(item => {
            item.addEventListener("click", function () {
                // Remove "active" class from all items
                document.querySelectorAll(".product-items").forEach(p => p.classList.remove("active"));
                
                // Add "active" class to the clicked item
                this.classList.add("active");
            });
        });
        
        document.getElementById("check").onclick = function () {
            let user = document.getElementById("userId").value;  // Get input value
            let server = document.getElementById("serverId").value;  // Get input value
            
            // Get the content from .t-item (total item name)
            let itemName = document.querySelector(".t-item").textContent;
        
            // Update modal content
            document.querySelector(".use-Id").textContent = user;  
            document.querySelector(".ser-ID").textContent = server;
            document.querySelector(".m-title").textContent = itemName;  // Set .m-title to .t-item's content
            const randomNumber = Math.floor(Math.random() * 100000000) + 1; // Random number from 1 to 100
            document.getElementById("random-number").innerText = `${randomNumber}`;

            const now = new Date();

            // Format date as YYYY-MM-DD
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-indexed
            const day = now.getDate().toString().padStart(2, '0');
            
            const formattedDate = `${year}-${month}-${day}`;
            
            // Format time as HH:MM:SS (24-hour format)
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            
            const formattedTime = `${hours}:${minutes}:${seconds}`;

            // Combine date and time
            const dateTimeString = `${formattedDate} ${formattedTime}`;

            // Display the date and time
            document.getElementById("date-time").innerText = `${dateTimeString}`;
        };
        
