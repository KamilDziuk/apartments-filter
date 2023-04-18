
      // Dane mieszkań
      var mieszkania = [
        { cena: 200000, powierzchnia: 58.80, floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1/" },
        { cena: 250000, powierzchnia: 30.15, floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2/" },
        { cena: 300000, powierzchnia: 49.20,floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m3/" },
        { cena: 350000, powierzchnia: 48.60,floors: 0, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m4/" },
      
        { cena: 200000, powierzchnia: 52.35, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m1-p1/" },
        { cena: 250000, powierzchnia: 80, floors: 1, building: "A", link: "https://osiedle-paderewskiego.pl/budynek-a-m2-p1/" },
        { cena: 300000, powierzchnia: 100,floors: 1, building: "A", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 2, building: "A", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 2, building: "A", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 2, building: "A", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 3, building: "A", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 3, building: "A", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 3, building: "A", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 4, building: "A", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 4, building: "A", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 4, building: "A", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "A", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 0, building: "B", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 0, building: "B", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 0, building: "B", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 0, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 0, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 1, building: "B", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 1, building: "B", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 1, building: "B", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 2, building: "B", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 2, building: "B", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 2, building: "B", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 3, building: "B", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 3, building: "B", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 3, building: "B", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 4, building: "B", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 4, building: "B", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 4, building: "B", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "B", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 0, building: "C", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 0, building: "C", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 0, building: "C", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 0, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 0, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 1, building: "C", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 1, building: "C", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 1, building: "C", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 2, building: "C", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 2, building: "C", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 2, building: "C", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 3, building: "C", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 3, building: "C", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 3, building: "C", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 4, building: "C", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 4, building: "C", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 4, building: "C", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "C", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 0, building: "D", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 0, building: "D", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 0, building: "D", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 0, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 0, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 1, building: "D", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 1, building: "D", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 1, building: "D", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 1, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 2, building: "D", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 2, building: "D", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 2, building: "D", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 2, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 3, building: "D", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 3, building: "D", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 3, building: "D", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 200000, powierzchnia: 60, floors: 4, building: "D", link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 4, building: "D", link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 4, building: "D", link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "D", link: "http://mieszkanie4.pl" },
        { cena: 350000, powierzchnia: 120,floors: 4, building: "D", link: "http://mieszkanie4.pl" }
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
            mieszkanieElement.innerHTML = "Cena: " + mieszkanie.cena + "zł | " + "Powierzchnia: "+ 
            mieszkanie.powierzchnia + " m<sup>2</sup> | " + " Piętro: " + mieszkanie.floors +" | Budynek: "+ 
            mieszkanie.building + "| <a href='" + mieszkanie.link + "' target='_blank'>Zobacz wynik wyszukiwania</a> ";
            wyniki.appendChild(mieszkanieElement);
          }
        });
      }
