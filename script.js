
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
        
        var building = document.getElementById("form").building.value;
       var cenaOdStr = document.getElementById("form").priceForm.value;
      var cenaDoStr = document.getElementById("form").priceTo.value;
              //In the "selectApartments()" function, for the "Price from" and "to" fields, we first retrieve the values as text, then replace the dots and commas with empty strings using the "replace()" method. We then convert the text to a number using the "Number()" constructor. If the field value is empty, we set it to null. In the conditions, we check if the price value is greater or less than the minimum or maximum value, which is a numeric or null value. If the price value
      var priceForm = cenaOdStr === "" ? null : Number(cenaOdStr.replace(/[\.,]/g, ""));
      var priceTo = cenaDoStr === "" ? null : Number(cenaDoStr.replace(/[\.,]/g, ""));

        var powOd = Number(document.getElementById("form").powOd.value);
        var powDo = Number(document.getElementById("form").powDo.value);
        var floorsOd = Number(document.getElementById("form").floorsOd.value);
        var floorsDo = Number(document.getElementById("form").floorsDo.value);
        var sortMostPriceCheckbox = document.getElementById("sort-most-price-checkbox");
        var sortLeastPriceCheckbox = document.getElementById("sort-least-price-checkbox");
        var sortMostSurfaceCheckbox = document.getElementById("sort-most-surface-checkbox");
        var sortLeastSurfaceCheckbox = document.getElementById("sort-least-surface-checkbox");
        
        var result = document.getElementById("result");
        result.innerHTML = "";
        var found = false;
        
        // Sort function
        var sortByPriceAsc = function(a, b) {
          return a.price - b.price;
        };
        var sortByPriceDesc = function(a, b) {
          return b.price - a.price;
        };
        var sortBySurfaceAsc = function(a, b) {
          return a.surface - b.surface;
        };
        var sortBySurfaceDesc = function(a, b) {
          return b.surface - a.surface;
        };
        
        // Sorting based on selected checkboxes
        if (sortMostPriceCheckbox.checked && sortMostSurfaceCheckbox.checked) {
          apartments.sort(sortByPriceDesc).sort(sortBySurfaceDesc);
        } else if (sortMostPriceCheckbox.checked) {
          apartments.sort(sortByPriceDesc);
        } else if (sortMostSurfaceCheckbox.checked) {
          apartments.sort(sortBySurfaceDesc);
        } else if (sortLeastPriceCheckbox.checked && sortLeastSurfaceCheckbox.checked) {
          apartments.sort(sortByPriceAsc).sort(sortBySurfaceAsc);
        } else if (sortLeastPriceCheckbox.checked) {
          apartments.sort(sortByPriceAsc);
        } else if (sortLeastSurfaceCheckbox.checked) {
          apartments.sort(sortBySurfaceAsc);
        }
        apartments.forEach(function(apartment) {
          
          
          if (
            apartment.building === building &&
            (priceForm === "" || apartment.price >= priceForm) &&
              (priceTo === "" || apartment.price <= priceTo) &&
              (powOd === "" || apartment.surface >= powOd) &&
              (powDo === "" || apartment.surface <= powDo) &&
              (floorsDo === "" || apartment.floors <= floorsDo) &&
              (floorsOd === "" || apartment.floors >= floorsOd)) {
            var apartmentElement = document.createElement("div");
            apartmentElement.innerHTML = "Cena: " + apartment.price.toFixed(2)  + "zł | " + "Powierzchnia: "+ 
            apartment.surface.toFixed(2)  + " m<sup>2</sup> | " + " Piętro: " + apartment.floors +" | Budynek: "+ 
            apartment.building + " | <button onclick=\"window.open('" + apartment.link + "', '_blank')\"><span style='color:#000000;'>Zobacz wynik wyszukiwania</span></button> ";
            found = true;
            result.appendChild(apartmentElement);
              }
        });
        if (!found) {
          // add information about no results to the search results
          var noResultsElement = document.createElement("div");
          noResultsElement.innerHTML = "Nie znaleziono żadnych apartamentów spełniających podane kryteria.";
          result.appendChild(noResultsElement);
        }
      }
      function updateFloors() {
        var floors = Number(document.getElementById("form").floors.value);
        document.getElementById("form").floorsDo.min = floors;
        if (Number(document.getElementById("form").floorsDo.value) < floors) {
          document.getElementById("form").floorsDo.value = floors;
        }
      }
      function updatePrice() {
        var price = Number(document.getElementById("form").price.value);
        document.getElementById("form").priceTo.min = price;
        if (Number(document.getElementById("form").priceTo.value) < price) {
          document.getElementById("form").priceTo.value = price;
        }
      }

      function updatePow() {
        var pow = Number(document.getElementById("form").pow.value);
        document.getElementById("form").powDo.min = pow;
        if (Number(document.getElementById("form").powDo.value) < pow) {
          document.getElementById("form").powDo.value = pow;
        }
      }
      
      function updatePow() {
        var pow = Number(document.getElementById("form").pow.value);
        document.getElementById("form").powDo.min = pow;
        if (Number(document.getElementById("form").powDo.value) < pow) {
          document.getElementById("form").powDo.value = pow;
        }
      }


