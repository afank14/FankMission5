// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Create the function to calculate the total cost on button click
$("#submit").click(function () {
    // Set up a rate variable and grab the input
    let rate = $("#rate").val();

    // Set up an hours variable, grab the hours input (which is readonly)
    let hours = $("#hours").val();

    // Make sure that the number of hours is greater than 0
    if (hours < 0) {
        // Tell them to input a valid number
        alert("Please input a valid number of hours");

        // Clear the hours input and focus on it
        $("#hours").val("").focus();

        // Return so that it doesn't calculate the total
        return;
    }

    // Set up a total variable and initialize at 0
    let total = 0;

    // Calculate the total
    total = rate * hours;

    // assign the total into the page
    $("#total").val("$" + total.toFixed(2));
})