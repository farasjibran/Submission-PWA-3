var dbPromised = idb.open("football", 2, function (upgradeDb) {
    upgradeDb.createObjectStore("teams", {
        keyPath: "id"
    });
});

window.favorite = (id) => {
    return new Promise(() => {
        dbPromised
            .then(db => {
                const tx = db.transaction("teams", "readonly");
                const store = tx.objectStore("teams");
                return store.get(id);
            })
            .then(data => {
                if (data == undefined) {
                    teamGet(id).then(data => {
                        insertdb(data);
                    });
                } else {
                    deletedb(id);
                }
            });
    });
};

window.deletefavorite = (id) => {
    deletedb(id).then(favoriteTeam());
    console.log("reload");
};

// function for insert data in db
function insertdb(team) {
    let item = {};
    item = {
        id: team.id,
        name: team.name,
        crestUrl: team.crestUrl,
        shortName: team.shortName
    };
    dbPromised.then(db => {
        const tx = db.transaction("teams", 'readwrite');
        tx.objectStore("teams").add(item);
        return tx.complete;
    }).then(() => {
        M.toast({
            html: 'Data added to fav',
            classes: 'rounded'
        });
        console.log("item berhasil di tambah ke faforit");
    }).catch(() => {
        M.toast({
            html: 'Error',
            classes: 'rounded'
        });
        console.log("item gagal di tambah ke faforit");
    });
}

// function for delete data in db 
function deletedb(id) {
    return new Promise(() => {
        dbPromised.then(db => {
            const tx = db.transaction("teams", "readwrite");
            const store = tx.objectStore("teams");
            store.delete(id);
            return tx.complete;
        }).then(() => {
            M.toast({
                html: 'Data delete from fav!',
                classes: 'rounded'
            });
            console.log("data berhasil di hapus");
        }).catch(() => {
            M.toast({
                html: 'Error',
                classes: 'rounded'
            });
        });
    });
}

// function for get all data db
function getAllDataDB() {
    return new Promise((resolve, reject) => {
        dbPromised.then(db => {
            const tx = db.transaction("teams", "readonly");
            const store = tx.objectStore("teams");
            return store.getAll();
        })
            .then(data => {
                resolve(data);
            });
    });
}
