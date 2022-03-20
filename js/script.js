

$(document).ready(function() {
  $('.scroll').hide();
})    

$(document).ready(function() {
  $('#summary').hide();
})

$(document).ready(function() {
  var deliveryPrice = 0;
  $('#checkout').click(function() {
      var checkValue = document.getElementById('delivery').value;
      if (checkValue === '250') {
          deliveryPrice += 250;
          var location = prompt('where is your location?');
          alert('Delivery Price is Ksh' + deliveryPrice)
          alert('Pizza will be delivered in' + ' ' + location);
      }     
  });

$('form#pizza').submit(function(event) {
  var pizzaSize = parseFloat(document.getElementById('size').value);
  var pizzaCrust = parseFloat(document.getElementById('crust').value);
  var pizzaTopping = parseFloat(document.getElementById('toppings').value);
  var pizzaQuantity = parseFloat(document.getElementById('number').value);
  var pizzaDelivery = parseFloat(document.getElementById('delivery').value);
  var total = (pizzaSize + pizzaCrust + pizzaTopping + pizzaDelivery)*pizzaQuantity;
  
  document.getElementById('displayTotal').innerHTML = total 
  console.log(total);

  document.getElementById('seeYourSizeChoice').innerHTML = pizzaSize;
  document.getElementById('seeYourCrustChoice').innerHTML = pizzaCrust;
  document.getElementById('seeYourToppingsChoice').innerHTML = pizzaTopping;
  document.getElementById('seeYourQuantityChoice').innerHTML = pizzaQuantity;
  document.getElementById('seeYourDeliveryChoice').innerHTML = pizzaDelivery;
  $('#summary').show();
  $('#scroll').show();

  event.preventDefault();
});
})