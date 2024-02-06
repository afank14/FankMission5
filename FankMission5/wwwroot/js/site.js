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

        // Clear the total output in case they are running it again
        $("#total").val("");

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