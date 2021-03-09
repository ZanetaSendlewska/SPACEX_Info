async function loadRoadster() {
    let roadster = await getRoadster()
    let table = document.getElementById("Table3").getElementsByTagName('tbody')[0];
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = roadster.launch_date_utc;
    cell2.innerHTML = roadster.details;
    let link = document.createElement("a");
    link.setAttribute("href", "moreInfoRoadster.html?id=" + roadster.id)
    let linkText = document.createTextNode("More info");
    link.appendChild(linkText);
    cell3.appendChild(link);
}

async function getRoadster() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/roadster');
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Fetching data failed...');
    }
}

console.log(getRoadster());