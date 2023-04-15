//   // Dane mieszkań
//     var mieszkania = [
//       { cena: 200000, powierzchnia: 60, floors: 0, building: "A", link: "http://mieszkanie1.pl" },
//       { cena: 250000, powierzchnia: 80, floors: 1, building: 0,  link: "http://mieszkanie2.pl" },
//       { cena: 300000, powierzchnia: 100,floors: 2, building: 0,  link: "http://mieszkanie3.pl" },
//       { cena: 350000, powierzchnia: 120,floors: 3, building: 0,  link: "http://mieszkanie4.pl" }
//     ];

//     // Funkcja wybierająca mieszkania zgodnie z kryteriami
//     function wybierzMieszkania() {
//       var cenaOd = Number(document.getElementById("cenaOd").value);
//       var cenaDo = Number(document.getElementById("cenaDo").value);
//       var powOd = Number(document.getElementById("powOd").value);
//       var powDo = Number(document.getElementById("powDo").value);
//       var floorsOd = Number(document.getElementById("floorsOd").value);
//       var floorsDo = Number(document.getElementById("floorsDo").value);
//       var buildingOd = Text(document.getElementById("buildingOd"));
//       var buildingDo = Text(document.getElementById("buildingDo"));

//       var wyniki = document.getElementById("wyniki");
//       wyniki.innerHTML = "";

//       mieszkania.forEach(function(mieszkanie) {
//         if ((cenaOd === "" || mieszkanie.cena >= cenaOd) &&
//             (cenaDo === "" || mieszkanie.cena <= cenaDo) &&
//             (powOd === "" || mieszkanie.powierzchnia >= powOd) &&
//             (powDo === "" || mieszkanie.powierzchnia <= powDo) &&
//             (floorsDo === "" || mieszkanie.floors >= floorsDo) &&
//             (floorsOd === "" || mieszkanie.floors <= floorsOd) &&
//             (buildingOd === "" || mieszkanie.building >= buildingOd) &&
//             (buildingDo === "" || mieszkanie.building <= buildingDo)) {
//           var mieszkanieElement = document.createElement("div");
//           mieszkanieElement.innerHTML = mieszkanie.cena + " zł | " + mieszkanie.powierzchnia + " m<sup>2</sup> | <a href='" + mieszkanie.link + "' target='_blank'>Zobacz wynik wyszukiwania</a> | " +  " Piętro:" + mieszkanie.floors +" | Budynek:"+ mieszkanie.building;
//           wyniki.appendChild(mieszkanieElement);
//         }
//       });
//     }
    

      // Dane mieszkań
      var mieszkania = [
        { cena: 200000, powierzchnia: 60, floors: 0, link: "http://mieszkanie1.pl" },
        { cena: 250000, powierzchnia: 80, floors: 1, link: "http://mieszkanie2.pl" },
        { cena: 300000, powierzchnia: 100,floors: 2, link: "http://mieszkanie3.pl" },
        { cena: 350000, powierzchnia: 120,floors: 3, link: "http://mieszkanie4.pl" }
      ];
  
      // Funkcja wybierająca mieszkania zgodnie z kryteriami
      function wybierzMieszkania() {
        var cenaOd = Number(document.getElementById("cenaOd").value);
        var cenaDo = Number(document.getElementById("cenaDo").value);
        var powOd = Number(document.getElementById("powOd").value);
        var powDo = Number(document.getElementById("powDo").value);
        var floorsOd = Number(document.getElementById("floorsOd").value);
        var floorsDo = Number(document.getElementById("floorsDo").value);
    
     
  
        var wyniki = document.getElementById("wyniki");
        wyniki.innerHTML = "";
  
        mieszkania.forEach(function(mieszkanie) {
          if ((cenaOd === "" || mieszkanie.cena >= cenaOd) &&
              (cenaDo === "" || mieszkanie.cena <= cenaDo) &&
              (powOd === "" || mieszkanie.powierzchnia >= powOd) &&
              (powDo === "" || mieszkanie.powierzchnia <= powDo) &&
              (floorsDo === "" || mieszkanie.floors >= floorsDo) &&
              (floorsOd === "" || mieszkanie.floors <= floorsOd)) {
            var mieszkanieElement = document.createElement("div");
            mieszkanieElement.innerHTML = mieszkanie.cena + " zł | " + mieszkanie.powierzchnia + " m<sup>2</sup> | <a href='" + mieszkanie.link + "' target='_blank'>Zobacz wynik wyszukiwania</a> | " +  " Piętro: " + mieszkanie.floors;
            wyniki.appendChild(mieszkanieElement);
          }
        });
      }