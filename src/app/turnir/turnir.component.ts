import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnir',
  templateUrl: './turnir.component.html',
  styleUrls: ['./turnir.component.css']
})
export class TurnirComponent implements OnInit {

  constructor() { }
  filteredString: string = "";

  nameList = ["EuroLeague",
    "Spains Liga ACB",
    "Turkish Basketball Super League (BSL)",
    "Russia's VTB United League",
    "Germany's Basketball Bundesliga (BBL)",
    "Italy's Lega Basket Serie A (LBA)",
    "France's LNB Pro A",
    "Adriatic League (ABA)"
            ];
  filteredNames = this.nameList;
  nameList_List = [];

  doSearch() {
    this.filteredNames = [];
    console.log("TO FILTER: ", this.filteredString);
    this.nameList.forEach((element, idx) => {
      if (element.toLowerCase().includes(this.filteredString.toLowerCase())) {
        this.filteredNames.push(element);
      }
    });
  }
  addLeague(){
    this.nameList.push(this.filteredString);
  }

  ngOnInit(): void {
  }

}
