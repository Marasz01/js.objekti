var auto = {
    boja: "crna",
    marka: { tip: "Opel", model: "Astra"},
    cijena: 2000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function(vrijeme){
        return vrijeme * 5;
    },
    zakoci: function(vrijeme){
        return vrijeme / 5;
    },
    promjeniBoju: function(novaBoja){
        this.boja = novaBoja;
        return this.boja;
    },
};

console.log("auto JSON -->" + JSON.stringify(auto));