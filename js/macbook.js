// memory price function
function memoryPrice(isIncreasing) {
    const memoryCost = document.getElementById('memory-cost');
    if (isIncreasing == true) {
        memoryCost.innerText = '180';
    }
    else if (isIncreasing == false) {
        memoryCost.innerText = '0';
    }
    totalCalculation();
}

// memory price calling
document.getElementById('first-memory').addEventListener('click', function () {
    memoryPrice(false);
});
document.getElementById('last-memory').addEventListener('click', function () {
    memoryPrice(true);
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
    totalCalculation();
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
    totalCalculation();
};

// delivery cost function call
document.getElementById('first-delivery').addEventListener('click', function () {
    deliveryPrice(1);
});
document.getElementById('last-delivery').addEventListener('click', function () {
    deliveryPrice(2);
});

promoButton.addEventListener('click', function () {
    totalCalculation();
});

// total calculation
function totalCalculation() {
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');
    const promoInput = document.getElementById('promo-input');
    const promoButton = document.getElementById('promo-button');
    const finalPrice = document.getElementById('final-total');

    const totalMemoryCost = parseInt(memoryCost.innerText);
    const totalStorageCost = parseInt(storageCost.innerText);
    const totalDeliveryCost = parseInt(deliveryCost.innerText);
    const totalCost = 1299 + totalMemoryCost + totalStorageCost + totalDeliveryCost;

    totalPrice.innerText = totalCost;
    finalPrice.innerText = totalCost;

    let finalCost = finalPrice.innerText;

    promoButton.addEventListener('click', function () {
        if (promoInput.value == 'stevekaku') {
            finalCost = finalCost - parseFloat(finalCost / 5);
            finalPrice.innerText = finalCost;
            promoButton.setAttribute('disabled', true);
        }
        promoButtonClicked();
    });
};
