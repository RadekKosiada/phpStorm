const mainContainer = $("#main-container");
console.log(mainContainer);

$.ajax({
    type: 'GET',
    url: "data.json",
    contentType: 'application/json',
    success: function (result) {
        console.log(result.aktuelles)
        const current = result.aktuelles; //array
        const events = result.veranstaltungen; //array

        fillData(current, "current");

       fillData(events, "events");
    }
});


function fillData (element, className) {
    element.forEach(function (item, index) {
        let currentContainer = mainContainer.append(`
                <div class="${className}-container">
                    <img src=${item.img}>
                    <p>${item.date}</p>
                    <h1 class="">${item.headline}</h1>
                    <p>${item.infos}</p>
                    <p>${item.moreInfos}</p>
                </div>`)
    })
}
