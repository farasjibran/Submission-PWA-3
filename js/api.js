const token = "bb6a3f093e6e48ed893d20394bfe5e50";
const code = "2021";
const basedUrl = "https://api.football-data.org/";
const urlStandings = `${basedUrl}v2/competitions/${code}/standings?standingType=TOTAL`;
const urlMatches = `${basedUrl}v2/competitions/${code}/matches?status=SCHEDULED`;
let urlTeam = `${basedUrl}v2/teams/`;
let fetchApi = url => {
    return fetch(url, {
        method: "GET",
        headers: {
            'X-Auth-Token': token
        }
    });
};

function json(response) {
    return response.json();
}

function error(error) {
    console.log("Error : " + error);
}

function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {

        return Promise.resolve(response);
    }
}

function standingsGet() {
    if ("caches" in window) {
        caches.match(urlStandings).then(function (response) {
            if (response) {
                response.json().then(data => {
                    component_standings(data);
                });
            }
        }).catch(error);
    }

    fetchApi(urlStandings)
        .then(status)
        .then(json)
        .then(data => {
            component_standings(data);
        })
        .catch(error);
}

function matchesGet() {
    if ("caches" in window) {
        caches.match(urlMatches).then(response => {
            if (response) {
                response.json().then(data => {
                    component_matches(data);
                });
            }
        });
    }

    fetchApi(urlMatches)
        .then(status)
        .then(json)
        .then(data => {
            component_matches(data);
        })
        .catch(error);
}

function teamGet(id) {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(urlTeam + id).then(response => {
                if (response) {
                    response.json().then(data => {
                        resolve(data);
                    });
                }
            });
        }

        fetchApi(urlTeam + id)
            .then(status)
            .then(json)
            .then(data => {
                resolve(data);
            }).catch(e => console.error(e));
    });
}