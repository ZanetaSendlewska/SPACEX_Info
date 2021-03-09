async function moreInfoRoadster() {
    let roadster = await getMoreRoadster()

    let table = document.getElementById("Table3-1").getElementsByTagName('tbody')[0];
    let row = table.insertRow(table.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);




    cell1.innerHTML = roadster.mars_distance_km;
    cell2.innerHTML = roadster.earth_distance_km;
    // cell3.innerHTML= rocket.flickr_images[0];

    let link = document.createElement("img");
    link.setAttribute("src", roadster.flickr_images[0])
    link.setAttribute("width", 400)



    cell3.appendChild(link);
    cell3.style.textAlign = "center";


    async function getMoreRoadster() {
        try {
            const response = await fetch('https://api.spacexdata.com/v4/roadster');
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Fetching data failed...');
        }
    }
}