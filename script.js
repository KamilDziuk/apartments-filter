
      // Dane mieszkań
      var apartments = [
        { price: 200000, surface: 58.80, floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1/" },
        { price: 250000, surface: 30.15, floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2/" },
        { price: 300000, surface: 49.20,floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3/" },
        { price: 350000, surface: 48.60,floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4/" },
      
        { price: 200000, surface: 52.35, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p1/" },
        { price: 200000, surface: 52.35, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p1/" },
        { price: 200000, surface: 52.35, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p1/" },
        { price: 200000, surface: 52.35, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p1/" },
        { price: 200000, surface: 52.35, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m5-p1/" },

        { price: 200000, surface: 52.35, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p2/" },
        { price: 200000, surface: 52.35, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p2/" },
        { price: 200000, surface: 52.35, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p2/" },
        { price: 200000, surface: 52.35, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p2/" },
  
        { price: 200000, surface: 52.35, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p3/" },
        { price: 200000, surface: 52.35, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p3/" },
        { price: 200000, surface: 52.35, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p3/" },
        { price: 200000, surface: 52.35, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p3/" },


        { price: 200000, surface: 52.35, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p4/" },
        { price: 200000, surface: 52.35, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p4/" },
        { price: 200000, surface: 52.35, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p4/" },
        { price: 200000, surface: 52.35, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p4/" },
     

    
     
      ];
  
      // Funkcja wybierająca mieszkania zgodnie z kryteriami
      function selectApartments() {
        var cenaOd = Number(document.getElementById("cenaOd").value);
        var cenaDo = Number(document.getElementById("cenaDo").value);
        var powOd = Number(document.getElementById("powOd").value);
        var powDo = Number(document.getElementById("powDo").value);
        var floorsOd = Number(document.getElementById("floorsOd").value);
        var floorsDo = Number(document.getElementById("floorsDo").value);
        var building = document.getElementById("building");
     
  
        var result = document.getElementById("result");
        result.innerHTML = "";
  
        apartments.forEach(function(apartment) {
          if ((cenaOd === "" || apartment.price >= cenaOd) &&
              (cenaDo === "" || apartment.price <= cenaDo) &&
              (powOd === "" || apartment.surface >= powOd) &&
              (powDo === "" || apartment.surface <= powDo) &&
              (floorsDo === "" || apartment.floors <= floorsDo) &&
              (floorsOd === "" || apartment.floors >= floorsOd)) {
            var apartmentElement = document.createElement("div");
            apartmentElement.innerHTML = "Cena: " + apartment.price + "zł | " + "Powierzchnia: "+ 
            apartment.surface + " m<sup>2</sup> | " + " Piętro: " + apartment.floors +" | Budynek: "+ 
            apartment.building + "| <a href='" + apartment.link + "' target='_blank'>Zobacz wynik wyszukiwania</a> ";
            result.appendChild(apartmentElement);
          }
        });
      }
