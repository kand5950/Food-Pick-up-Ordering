// Client facing scripts here for admin portal
$(() => {

  const userOrder = JSON.parse(order);

    $('#waitTime').change(function () {
        selected = $(this).find("option:selected").text();
      });


    estTime = [];

    $('.button1').on("click", function (event) {
        $("#collapseOne .card-body").empty();


      const newEstTime = {}


        console.log("cliked accept")
        $("#collapseTwo").append(`
        <div class="card-body">
        <h2 class="header4">New Estimated time: ${selected} min</h2>

        <h2 class="header2">List of items to be done: ${userOrder.order_food} </h2>

          <h2 class="header3">Total: ${userOrder.total_price} $</h2>
      </div>
      `);

      newEstTime["estTime"] = selected

      $.ajax({
        url: '/restuarants/update',
        method: "POST",
        data: newEstTime,
        success: function () { console.log(data) }

      })

    });




  });

