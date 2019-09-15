const mainContainer = $("#main-container");
console.log(mainContainer);

$.ajax({
    type: 'GET',
    url: "data.json",
    contentType: 'application/json',
    success: function (result) {
        const current = result.aktuelles; //array
        const events = result.veranstaltungen; //array

        //add className as additional property in each event or current
        addClassName(current, "current" );
        addClassName(events, "events");

        //fillData(current, "current");
        //fillData(events, "events");

        fillAllData (current, events);
    }
});

function fillAllData (current, events) {
    console.log(current, events);
    let allElements = [];
    current.forEach(function (elem, indexElem) {
        events.forEach(function (event, indexEvent) {
            //this approach works only as long the length of current & events is equal!
            if(indexEvent === indexElem) {
                allElements.push(elem);
                allElements.push(event);
            }
        })
    });

    console.log(allElements);
    fillData(allElements)
}

function fillData(element) {
    element.forEach(function (item, index) {
        let currentContainer = mainContainer.append(`
                <div id="${index}" class="${item.className}-container">
                    <img src=${item.img}>
                    <p>${item.date}</p>
                    <h1 class="">${item.headline}</h1>
                    <p>${item.infos}</p>
                    <p>${item.moreInfos}</p>
                </div>`)
    })
}

function addClassName(itemsArr, className) {
    itemsArr.forEach(function (item) {
        item.className = className;
    })
};
