var auto = {
    marka: "Opel",
    model: "Astra",
    godinaProizvodnje: 2006,
    boja: "Siva",
    brzina: 10,
    maxBrzina: 220,
    vlasnik: {
      ime: "Ivan",
      prezime: "Maras",
      dob: 23
    },
    
    ubrzaj: function(koliko) {
      this.brzina = Math.min(this.brzina + koliko, this.maxBrzina);
      return this.brzina;
    },
    
    zakoči: function(koliko) {
      this.brzina = Math.max(this.brzina - koliko, 0);
      return this.brzina;
    },
    
    promijeniBoju: function(novaBoja) {
      this.boja = novaBoja;
      return this.boja;
    }
  };
  

  console.log("Brzina nakon ubrzavanja:", auto.ubrzaj(50));  
  console.log("Brzina nakon kočenja:", auto.zakoči(20));   
  console.log("Nova boja auta:", auto.promijeniBoju("Plava")); 
  

  console.log("Sve brojčane vrijednosti u objektu:");
  for (const key in auto) {
    if (typeof auto[key] === 'number') {
      console.log(`${key}: ${auto[key]}`);
    }
  }
  
  console.log(`Auto marke ${auto.marka} model ${auto.model} sada je ${auto.boja} boje.`);
  
  const jsonAuto = JSON.stringify(auto);
  console.log("JSON reprezentacija objekta:", jsonAuto);
  