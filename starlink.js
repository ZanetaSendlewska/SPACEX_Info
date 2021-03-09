
let current_page = 1;
let records_per_page = 10;

async function loadStarlinks() {
    let starlinks = await getStarlinks()
    let table = document.getElementById("Table1").getElementsByTagName('tbody')[0];
    document.getElementById("lastPage").innerHTML = "/" + numPages(starlinks);
    while (table.rows.length > 2) {
        table.deleteRow(2);
    }

    for (let index = (current_page - 1) * records_per_page; index < (current_page * records_per_page); index++) {
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = starlinks[index].spaceTrack.OBJECT_ID;
        cell2.innerHTML = starlinks[index].spaceTrack.OBJECT_NAME;
        cell3.innerHTML = starlinks[index].spaceTrack.LAUNCH_DATE;
    }

}

async function getStarlinks() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/starlink');
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Fetching data failed...');
    }
}

function prevPage() {
    if (current_page > 1) {
        current_page--;
        let page_span = document.getElementById("page");
        page_span.innerHTML = "page: " + current_page;
        loadStarlinks();
    }
}

async function nextPage() {
    if (current_page < numPages(await getStarlinks())) {
        current_page++;
        let page_span = document.getElementById("page");
        page_span.innerHTML = "page: " + current_page;
        loadStarlinks();
    }
}

function numPages(starlinks) {
    return Math.ceil(starlinks.length / records_per_page);
}