$(document).ready(function() {
    cart_count();

    function cart_count() {
        $.ajax({
            url: "/myproject/resources/checkout.php",
            method: "POST",
            data: {
                cart_count: 1
            },
            success: function(data) {
                $("#cart_items").text(data);
            }
        })
    }

    setInterval(() => {
        cart_count();
    }, 200);


    $("#orderby").click(function(e) {
        e.preventDefault();
        let orderby = $("#orderby").val();
        $.ajax({
            url: "/myproject/resources/functions.php",
            method: "POST",
            data: {
                sorts: 1,
                orderby: orderby,
            },
            success: function(data) {
                console.log(data);
            }
        })
    })

    $("#view").click(function(e) {
        e.preventDefault();
        console.log("clicked");
        // let orderby = $("#orderby").val();
        // $.ajax({
        //     url: "/myproject/resources/functions.php",
        //     method: "POST",
        //     data: {
        //         sorts: 1,
        //         orderby: orderby,
        //     },
        //     success: function(data) {
        //         console.log(data);
        //     }
        // })
    })






    // $("select").hover(function() {
    //     $(this).attr('size', $("option").length),
    //         function() {
    //             $(this).attr("size", 1);
    //         }
    // })


    // $("#dropdown").chosen().next(".container_container").hover(
    //     function() {
    //         $("#dropdown").trigger("liszt:open");
    //     },
    //     function() {
    //         $(this).trigger("click");
    //     }
    // )


    // $("#dropdown").mouseover(function(e) {
    //     $(this).show();
    //     $(this)[0].size = $("option").length;
    // });

    // $("#dropdown").mouseout(function(e) {
    //     $(this).show();
    //     $(this)[0].size = 1;
    // });



})