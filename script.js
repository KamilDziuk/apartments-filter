
      // Dane mieszkań
      var mieszkania = [
        { cena: 200000, powierzchnia: 60, floors: 0, building: "A", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 1, building: "B", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 2, building: "C", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "D", link: "http://mieszkanie4.pl" }
      ];
  
      // Funkcja wybierająca mieszkania zgodnie z kryteriami
      function wybierzMieszkania() {
        var cenaOd = Number(document.getElementById("cenaOd").value);
        var cenaDo = Number(document.getElementById("cenaDo").value);
        var powOd = Number(document.getElementById("powOd").value);
        var powDo = Number(document.getElementById("powDo").value);
        var floorsOd = Number(document.getElementById("floorsOd").value);
        var floorsDo = Number(document.getElementById("floorsDo").value);
          var building = document.getElementById("building");
     
  
        var wyniki = document.getElementById("wyniki");
        wyniki.innerHTML = "";
  
        mieszkania.forEach(function(mieszkanie) {
          if ((cenaOd === "" || mieszkanie.cena >= cenaOd) &&
              (cenaDo === "" || mieszkanie.cena <= cenaDo) &&
              (powOd === "" || mieszkanie.powierzchnia >= powOd) &&
              (powDo === "" || mieszkanie.powierzchnia <= powDo) &&
              (floorsDo === "" || mieszkanie.floors <= floorsDo) &&
              (floorsOd === "" || mieszkanie.floors >= floorsOd)) {
            var mieszkanieElement = document.createElement("div");
            mieszkanieElement.innerHTML = "Cena: " + mieszkanie.cena + "zł | " + "Powierzchnia: "+ mieszkanie.powierzchnia + " m<sup>2</sup> | " + " Piętro: " + mieszkanie.floors +" | Budynek: "+ mieszkanie.building + "| <a href='" + mieszkanie.link + "' target='_blank'>Zobacz wynik wyszukiwania</a> ";
            wyniki.appendChild(mieszkanieElement);

          }
        });
      }

