import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takmicar',
  templateUrl: './takmicar.component.html',
  styleUrls: ['./takmicar.component.css']
})
export class TakmicarComponent implements OnInit {

  constructor() { }
  filteredString: string = "";

  nameList = ["Milos Teodosić",
  "Bogdan Bogdanović",
  "Nemanja Bjelica",
  "Vasilije Micić",
  "Darko Miličić",
  "Predrag Stojaković",
  "Nikola Jokić",
  "Aleksej Pokuševski",
  "Vlade Divac"
          ];
filteredNames = this.nameList;

/*doSearch() {
  this.filteredNames = [];
  console.log("TO FILTER: ", this.filteredString);
  this.nameList.forEach((element, idx) => {
    if (element.toLowerCase().includes(this.filteredString.toLowerCase())) {
      this.filteredNames.push(element);
    }
  });
}
*/
addTakmicar(){
  this.nameList.push(this.filteredString);
}
  ngOnInit(): void {
  }

}
