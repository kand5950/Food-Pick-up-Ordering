// Client facing scripts here for admin portal
$(() => {


    $('#waitTime').change(function () {
        selected = $(this).find("option:selected").text();
      });


    estTime = [];

    $('.button1').on("click", function (event) {
        $("#collapseOne .card-body").empty();



        console.log("cliked accept")
        $("#collapseTwo").append(`
        <div class="card-body">
        <h2 class="header4">New Estimate time: ${selected} min</h2>

        <h2 class="header2">List of items to be done: ... </h2>
  
          <h2 class="header3">Total: ... $</h2>
      </div>
      `);
    });




  });

