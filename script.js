const mainContainer = $("#main-container");
console.log(mainContainer)
mainContainer.css({"border": "3px solid red"});

$.ajax({
    type: 'GET',
    url: "data.json",
    contentType: 'application/json',
    success: function(result) {
        console.log(result)
    }
});