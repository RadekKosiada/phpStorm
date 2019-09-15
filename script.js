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

        fillData(current);

       fillData(events);
    }
});


function fillData (element) {
    element.forEach(function (item, index) {
        let currentContainer = mainContainer.append(`
                <div class="current-container">
                    <img src=${item.img}>
                    <p>${item.date}</p>
                    <h1 class="current">${item.headline}</h1>
                    <p>${item.infos}</p>
                    <p>${item.moreInfos}</p>
                </div>`)
    })
}
