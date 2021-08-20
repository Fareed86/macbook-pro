// memory price function
function memoryPrice(isIncreasing, value) {
    const memoryCost = document.getElementById('memory-cost');

    if (isIncreasing == true) {
        memoryCost.innerText = value;
    }
    else if (isIncreasing == false) {
        memoryCost.innerText = value;
        totalPrice.innerText = parseInt(totalPrice);
    }
}

// memory price calling
document.getElementById('first-memory').addEventListener('click', function () {
    memoryPrice(false, 0);
});
document.getElementById('last-memory').addEventListener('click', function () {
    memoryPrice(true, 180);
});

// storage price function
function storagePrice(value) {
    const storageCost = document.getElementById('storage-cost');
    if (value == 1) {
        storageCost.innerText = 0;
    }
    else if (value == 2) {
        storageCost.innerText = 100;
    }
    else {
        storageCost.innerText = 180;
    }
    // const totalPrice = document.getElementById('total-price');
    // const finalPrice = document.getElementById('final-total');
    // totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(storageCost.innerText);
    // finalPrice.innerText = parseInt(finalPrice.innerText) + parseInt(storageCost.innerText);
}
// srtorage price calling
document.getElementById('first-storage').addEventListener('click', function () {
    storagePrice(1);
});
document.getElementById('second-storage').addEventListener('click', function () {
    storagePrice(2);
});
document.getElementById('last-storage').addEventListener('click', function () {
    storagePrice(3);
});

// delivery cost function
function deliveryPrice(value) {
    const deliveryCost = document.getElementById('delivery-cost');
    if (value == 1) {
        deliveryCost.innerText = 0;
    }
    else {
        deliveryCost.innerText = 20;
    }
    // const totalPrice = document.getElementById('total-price');
    // const finalPrice = document.getElementById('final-total');
    // totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(deliveryCost.innerText);
    // finalPrice.innerText = parseInt(finalPrice.innerText) + parseInt(deliveryCost.innerText);
}
// delivery cost function call
document.getElementById('first-delivery').addEventListener('click', function () {
    deliveryPrice(1);
});
document.getElementById('last-delivery').addEventListener('click', function () {
    deliveryPrice(2);
});


// total calculation
// const totalMemoryCost = parseInt(memoryCost.innerText);
// const totalStorageCost = parseInt(storageCost.innerText);
// const totalDeliveryCost = parseInt(deliveryCost.innerText);
// const totalCost = totalMemoryCost + totalStorageCost + totalDeliveryCost;


// totalPrice.innerText = totalCost;