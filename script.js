
$.ajax({
    type: 'GET',
    url: "data.json",
    contentType: 'application/json',
    success: function(result) {
        console.log(result)
    }
});