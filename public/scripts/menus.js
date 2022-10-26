// Client facing scripts here
$(() => {
    const userMenu = JSON.parse(menu)
    

    $(".card-block a").on("click", function(event) {
        $(".show-cart table").empty();
        console.log()
        order = [];
        total = 0;
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
              
            
        })
       

})