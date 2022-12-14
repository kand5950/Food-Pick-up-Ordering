// Client facing scripts here
$(() => {
  const userMenu = JSON.parse(menu)

  order = [];
  total = 0;
  $(".total-count").html("0");

  $(".card-block a").on("click", function (event) {
    $(".show-cart").empty();

    for (let food of userMenu) {
      if (food.name === $(this).parent(".card-block").children(".card-title").text()) {
        order.push({
          id: food.id,
          name: `${food.name}`,
          price: food.price,
          estimated_time: food.estimated_time
        });
        total += (food.price / 100)

      };
    };
    for (let key of order) {
      $(".show-cart").append(`<p class = "item-in-cart"> ${key.name}</p>`);
    };
    $(".show-cart").append(`<div>Total price: $${total}<span class="total-cart"></span></div>`);

    updateCartIcon()
  })

  $('.clear-cart').click(function () {
    $(".show-cart").empty();
    order.length = 0;
    updateCartIcon()
  });


  function timeConverted(i) {
    var number = i;
    var hours = (number / 60);
    var realhours = Math.floor(hours);
    var minutes = (hours - realhours) * 60;
    var realminutes = Math.round(minutes);
    return realhours + " hour(s) & " + realminutes + " minute(s).";
  }

  $('.checkout').on("click", function (event) {

    const userOrder = {};

    let totalMins = 0;

    for (let food of order) { 
      totalMins += Number(food.estimated_time);
    }

    console.log("button clicked")

    const estTime = timeConverted(totalMins);

    userOrder['foods_ordered'] = order;
    userOrder['estTime'] = estTime;
    userOrder['total'] = total;
    $.ajax({
      url: '/user_confirmation',
      method: "POST",
      data: userOrder,
      success: function () { window.location.href="/user_confirmation" }

    })

    



  })

  function updateCartIcon() {
    if (order.length) {
      $(".total-count").html(order.length);
    } else {
      $(".total-count").html("0");
    }
  }


})
