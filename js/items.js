function component_standings(data) {
    // console.log(data.standings[0].table);
    let standHTML = "";
    data.standings[0].table.forEach(data => {
        // console.log(data.team.name)
        // standHTML += `<p>${data.team.name}`;
        data = JSON.parse(JSON.stringify(data).replace(/http:/g, 'https:'));
        // console.log(data);
        standHTML += `<tr>
              <td class="center-align">${data.position}</td>
              <td>       
              <p class="hide-on-small-only">
              <img class = "show-on-medium-and-up show-on-medium-and-down" src=${data.team.crestUrl.replace(/^http:\/\//i, 'https://')} style="float:left;width:22px;height:22px;margin-right:20px">
              ${data.team.name}
              </p>
              <p class="hide-on-med-and-up">
              <img src=${data.team.crestUrl.replace(/^http:\/\//i, 'https://')} style="float:left;width:22px;height:22px;margin-right:20px">
              </p>
              </td>
              <td class="center-align">${data.playedGames}</td>
              <td class="center-align">${data.won}</td>
              <td class="center-align">${data.draw}</td>
              <td class="center-align">${data.lost}</td>       
              <td class="center-align">${data.points}</td>
              <td class="center-align">
              <a class="waves-effect waves-light" onClick="favorite(${data.team.id})"><i class="fas fa-plus-circle fa-2x"></i></a>
              </td>
            </tr>`;

    });
    document.getElementById("standingsteam").innerHTML = standHTML;
}

function component_matches(data) {
    const match = data.matches.slice(0, 99);
    console.log(match);
    let matchHTML = "";
    match.forEach(data => {
        matchHTML += `<div class="col s12 m6 l6">
            <div class="card">
                <div class="card-content" style="padding-bottom: 70px">
                    <div center-align>
                        <div class="right-align">
                        </div>
                        <h5 class="center-align">Stage: ${data.group}</h5>
                        <div class="row" style="margin:20px">
                            <div class="col s5 truncate right-align" style="margin-right: 20px; margin-left: -20px">
                                <span class="blue-text text-darken-2"><b>${data.homeTeam.name}</b></span>
                            </div>
                            <div class="col s2 ">
                                VS
                            </div>
                            <div class="col s4 truncate left-align">
                                <span class="blue-text text-darken-2"><b> ${data.awayTeam.name}</b></span>
                            </div>
                        </div>
                        <div class="center-align">Kick Off: ${data.season.startDate}</div>
                    </div>
                </div>
            </div>
        </div>`;

    });
    document.getElementById("matchesteam").innerHTML = matchHTML;
}

function favoriteTeam() {
    getAllDataDB().then(data => {
        if (data.length == 0) return document.getElementById("teamfavorite").innerHTML = "<h2>No favorite item in here</h2>";

        let teamHtml = "<h2>Favorite Team</h2>";
        data.forEach(team => {
            teamHtml += `           
            <div class="row">
            <div class="col s12 m3">
            <div class="center-align card">
              <div class="card-image">
                <img class="responsive-img" src="${team.crestUrl}" style="width:250px; padding-top:20px">
                <a class="center-align btn-floating halfway-fab waves-effect waves-light red" onClick="deletefavorite(${team.id},'team')" style="top:107%; right:5%"><i class="fas fa-trash"></i></a>
              </div>
              <div class="card-content">
                <span class="card-title" style="margin-left: -20%">${team.name}</span>
              </div>
            </div>
          </div>`;
        });
        document.getElementById("teamfavorite").innerHTML = teamHtml;
    });
}