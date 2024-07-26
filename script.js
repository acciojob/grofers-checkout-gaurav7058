document.addEventListener('DOMContentLoaded', function() {
    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        let prices = document.getElementsByClassName("price");
        let sum = 0;

        for (let i = 0; i < prices.length; i++) {
            sum += parseFloat(prices[i].textContent);
        }

        let totalPriceElement = document.querySelector(".total_price");
        totalPriceElement.innerHTML = "Total Price: Rs " + sum;
    };

    getSumBtn.addEventListener("click", getSum);
});
