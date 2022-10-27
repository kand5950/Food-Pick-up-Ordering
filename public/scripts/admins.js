// Client facing scripts here for admin portal
$(() => {
    
    $('.button1').on("click", function (event) {
        console.log("cliked accept")
        $("#collapseTwo").append(`
        <div class="card-body">
        <h2 class="header4">New Estimate time: <%= order.estimated_time %>min</h2>

        <h2 class="header2">Placeholder for list of items: <%= order.order_food %></h2>
  
          <h2 class="header3">Total: $<%= order.total_price %></h2>
      </div>
      `);
    });




  });

