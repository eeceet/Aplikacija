import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trener',
  templateUrl: './trener.component.html',
  styleUrls: ['./trener.component.css']
})
export class TrenerComponent implements OnInit {

  constructor() { }
  filteredString: string = "";
  isUpdate: boolean = false;
  name: string;
  id: number;
  idCounter = 0;
  nameList : any[] =  
  ["Svetislav Pesic",

    "Dušan Ivković",
    
    "Duško Vujošević",
    
    "Dejan Radonjić",
    
    "Aleksandar Đorđević",
    
    "Greg Popovič" ];
  filteredNames = this.nameList;

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
  update (nameList: any) {
    this.isUpdate = true;
  }
  
  updateTrener () {
    this.nameList.forEach((el) => {
      if (el.id === this.id) {
        el.name = this.name;
        this.isUpdate = false;
        this.name = '';
        this.id = 0;
      }
    })
  }
  ngOnInit(): void {
  }

}
