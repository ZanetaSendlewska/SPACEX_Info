async function moreInfoRockets() {
    let rocket = await getMoreRockets()

    let table = document.getElementById("Table2-1").getElementsByTagName('tbody')[0];
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = rocket.height.meters;
    cell2.innerHTML = rocket.mass.kg;

    let link = document.createElement("img");
    link.setAttribute("src", rocket.flickr_images[0])
    link.setAttribute("width", 300)

    cell3.appendChild(link);
    cell3.style.textAlign = "center";
    cell4.innerHTML = rocket.cost_per_launch;
    cell5.innerHTML = "Thrust vacuum: " + rocket.engines.thrust_vacuum.kN + "; Type: " + rocket.engines.type + "; Thrust to weight: " + rocket.engines.thrust_to_weight;
}

async function getMoreRockets() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets/' + getParamId());
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Fetching data failed...');
    }
}

function getParamId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}