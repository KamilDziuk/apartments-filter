
      // Apartment data
      var apartments = [
        { price: 200000, surface: 58.80, floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1/" },
        { price: 250000, surface: 30.15, floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2/" },
        { price: 300000, surface: 49.20,floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3/" },
        { price: 350000, surface: 48.60,floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4/" },
        { price: 200000, surface: 52.35, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p1/" },
        { price: 200000, surface: 56.09, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p1/" },
        { price: 200000, surface: 30.16, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p1/" },
        { price: 200000, surface: 49.31, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p1/" },
        { price: 200000, surface: 48.60, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m5-p1/" },
        { price: 200000, surface: 58.56, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p2/" },
        { price: 200000, surface: 70.70, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p2/" },
        { price: 200000, surface: 62.31, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p2/" },
        { price: 200000, surface: 52.19, floors: 2, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p2/" },
        { price: 200000, surface: 58.56, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p3/" },
        { price: 200000, surface: 70.70, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p3/" },
        { price: 200000, surface: 62.31, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p3/" },
        { price: 200000, surface: 52.19, floors: 3, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p3/" },
        { price: 200000, surface: 58.56, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p4/" },
        { price: 200000, surface: 70.70, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p4/" },
        { price: 200000, surface: 62.31, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3-p4/" },
        { price: 200000, surface: 52.19, floors: 4, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4-p4/" },
        { price: 200000, surface: 58.80, floors: 0, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m1/" },
        { price: 250000, surface: 30.15, floors: 0, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m2/" },
        { price: 300000, surface: 49.20,floors: 0, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m3/" },
        { price: 350000, surface: 48.60,floors: 0, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m4/" },
        { price: 200000, surface: 52.35, floors: 1, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m1-p1/" },
        { price: 200000, surface: 56.09, floors: 1, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m2-p1/" },
        { price: 200000, surface: 30.16, floors: 1, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m3-p1/" },
        { price: 200000, surface: 49.31, floors: 1, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m4-p1/" },
        { price: 200000, surface: 48.60, floors: 1, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m5-p1/" },
        { price: 200000, surface: 58.56, floors: 2, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m1-p2/" },
        { price: 200000, surface: 70.70, floors: 2, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m2-p2/" },
        { price: 200000, surface: 62.31, floors: 2, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m3-p2/" },
        { price: 200000, surface: 52.19, floors: 2, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m4-p2/" },
        { price: 200000, surface: 58.56, floors: 3, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m1-p3/" },
        { price: 200000, surface: 70.70, floors: 3, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m2-p3/" },
        { price: 200000, surface: 62.31, floors: 3, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m3-p3/" },
        { price: 200000, surface: 52.19, floors: 3, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m4-p3/" },
        { price: 200000, surface: 58.56, floors: 4, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m1-p4/" },
        { price: 200000, surface: 70.70, floors: 4, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m2-p4/" },
        { price: 200000, surface: 62.31, floors: 4, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m3-p4/" },
        { price: 200000, surface: 52.19, floors: 4, building: "B", link: "https://osiedle-paderewskiego.pl/budynek-b-m4-p4/" },
        { price: 200000, surface: 58.80, floors: 0, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m1/" },
        { price: 250000, surface: 30.15, floors: 0, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m2/" },
        { price: 300000, surface: 49.20,floors: 0, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m3/" },
        { price: 350000, surface: 48.60,floors: 0, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m4/" },
        { price: 200000, surface: 52.35, floors: 1, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m1-p1/" },
        { price: 200000, surface: 56.09, floors: 1, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m2-p1/" },
        { price: 200000, surface: 30.16, floors: 1, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m3-p1/" },
        { price: 200000, surface: 49.31, floors: 1, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m4-p1/" },
        { price: 200000, surface: 48.60, floors: 1, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m5-p1/" },
        { price: 200000, surface: 58.56, floors: 2, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m1-p2/" },
        { price: 200000, surface: 70.70, floors: 2, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m2-p2/" },
        { price: 200000, surface: 62.31, floors: 2, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m3-p2/" },
        { price: 200000, surface: 52.19, floors: 2, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m4-p2/" },
        { price: 200000, surface: 58.56, floors: 3, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m1-p3/" },
        { price: 200000, surface: 70.70, floors: 3, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m2-p3/" },
        { price: 200000, surface: 62.31, floors: 3, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m3-p3/" },
        { price: 200000, surface: 52.19, floors: 3, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m4-p3/" },
        { price: 200000, surface: 58.56, floors: 4, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m1-p4/" },
        { price: 200000, surface: 70.70, floors: 4, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m2-p4/" },
        { price: 200000, surface: 62.31, floors: 4, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m3-p4/" },
        { price: 200000, surface: 52.19, floors: 4, building: "C", link: "https://osiedle-paderewskiego.pl/budynek-c-m4-p4/" },
        { price: 200000, surface: 58.80, floors: 0, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m1/" },
        { price: 250000, surface: 30.15, floors: 0, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m2/" },
        { price: 300000, surface: 49.20,floors: 0, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m3/" },
        { price: 350000, surface: 48.60,floors: 0, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m4/" },
        { price: 200000, surface: 52.35, floors: 1, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m1-p1/" },
        { price: 200000, surface: 56.09, floors: 1, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m2-p1/" },
        { price: 200000, surface: 30.16, floors: 1, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m3-p1/" },
        { price: 200000, surface: 49.31, floors: 1, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m4-p1/" },
        { price: 200000, surface: 48.60, floors: 1, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m5-p1/" },
        { price: 200000, surface: 58.56, floors: 2, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m1-p2/" },
        { price: 200000, surface: 70.70, floors: 2, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m2-p2/" },
        { price: 200000, surface: 62.31, floors: 2, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m3-p2/" },
        { price: 200000, surface: 52.19, floors: 2, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m4-p2/" },
        { price: 200000, surface: 58.56, floors: 3, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m1-p3/" },
        { price: 200000, surface: 70.70, floors: 3, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m2-p3/" },
        { price: 200000, surface: 62.31, floors: 3, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m3-p3/" },
        { price: 200000, surface: 52.19, floors: 3, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m4-p3/" },
        { price: 200000, surface: 58.56, floors: 4, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m1-p4/" },
        { price: 200000, surface: 70.70, floors: 4, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m2-p4/" },
        { price: 200000, surface: 62.31, floors: 4, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m3-p4/" },
        { price: 200000, surface: 52.19, floors: 4, building: "D", link: "https://osiedle-paderewskiego.pl/budynek-d-m4-p4/" }
      ];
      // A function that selects apartments according to criteria
      function selectApartments() {
        var building = (document.getElementById("building").value);
        // var buildingDo = (document.getElementById("buildingDo").value);
        var cenaOd = Number(document.getElementById("cenaOd").value);
        var cenaDo = Number(document.getElementById("cenaDo").value);
        var powOd = Number(document.getElementById("powOd").value);
        var powDo = Number(document.getElementById("powDo").value);
        var floorsOd = Number(document.getElementById("floorsOd").value);
        var floorsDo = Number(document.getElementById("floorsDo").value);
        var result = document.getElementById("result");
        result.innerHTML = "";
        apartments.forEach(function(apartment) {
          if (
            apartment.building === building &&
            // (buildingDo === "" || apartment.building <= buildingDo) &&
            (cenaOd === "" || apartment.price >= cenaOd) &&
              (cenaDo === "" || apartment.price <= cenaDo) &&
              (powOd === "" || apartment.surface >= powOd) &&
              (powDo === "" || apartment.surface <= powDo) &&
              (floorsDo === "" || apartment.floors <= floorsDo) &&
              (floorsOd === "" || apartment.floors >= floorsOd)) {
            var apartmentElement = document.createElement("div");
            apartmentElement.innerHTML = "Cena: " + apartment.price + "zł | " + "Powierzchnia: "+ 
            apartment.surface + " m<sup>2</sup> | " + " Piętro: " + apartment.floors +" | Budynek: "+ 
            apartment.building + " | <a href='" + apartment.link + "' target='_blank'>Zobacz wynik wyszukiwania</a> ";
            result.appendChild(apartmentElement);
              }
        });
      }
