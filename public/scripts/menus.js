// Client facing scripts here
$(() => {
    const userMenu = JSON.parse(menu)
    
    order = [];
    total = 0;
    $(".total-count").html("0");
    
    $(".card-block a").on("click", function(event) {
        $(".show-cart").empty();
        
        for (let food of userMenu) {
            if(food.name === $(this).parent(".card-block").children(".card-title").text()) {
                order.push({
                  id: food.id,
                  name: `${food.name}`,
                  price: food.price,
                  estimated_time: food.estimated_time
                });
                total += (food.price/100)
                
              };
            };
            for (let key of order) {
                $(".show-cart").append(`<p class = "item-in-cart"> ${key.name}</p>`);
              };
              $(".show-cart").append(`<div>Total price: $${total}<span class="total-cart"></span></div>`);
              
              updateCartIcon()
        })

    $('.clear-cart').click(function() {
        $(".show-cart").empty();
        order.length=0;
        updateCartIcon()
    });

    $('.checkout').on("click", function(event) {
        console.log("clicked")
        updateCartIcon()
    })

    function updateCartIcon() {
        if (order.length) {
          $(".total-count").html(order.length);
        } else {
          $(".total-count").html("0");
        }
      }
       

})