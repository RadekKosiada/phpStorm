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

       const allEvents = $("#main-container").children();
       console.log(allEvents);
       Array.from(allEvents).forEach(function (elem) {
           console.log(elem)
       })
    }
});


function fillData (element, className) {
    element.forEach(function (item, index) {
        let currentContainer = mainContainer.append(`
                <div id="${index}" class="${className}-container">
                    <img src=${item.img}>
                    <p>${item.date}</p>
                    <h1 class="">${item.headline}</h1>
                    <p>${item.infos}</p>
                    <p>${item.moreInfos}</p>
                </div>`)
    })
}
