import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistika',
  templateUrl: './statistika.component.html',
  styleUrls: ['./statistika.component.css']
})
export class StatistikaComponent implements OnInit {

  poeni: number;
  minuti: number;
  name: string;
  id: number;
  isUpdate: boolean = false;

  idCounter = 0;

  statistika : any[] = [
    {
      poeni: 12,
      minuti: 20,
      name: "Milos Teodosic",
      id: ++this.idCounter
    },
    {
      poeni: 38,
      minuti: 33,
      name: "Nikola Jokić",
      id: ++this.idCounter
    },
    {
      poeni: 22,
      minuti: 20,
      name: "Bogdan Bogdanović",
      id: ++this.idCounter
    },
    {
      poeni: 8,
      minuti: 20,
      name: "Nemanja Bjelica",
      id: ++this.idCounter
    },
    {
      poeni: 35,
      minuti: 20,
      name: "Boban Marjanović",
      id: ++this.idCounter
    },
  ]
  filteredStatistika = this.statistika;

  addStatistika(){
    this.statistika.push({name: this.name, poeni: this.poeni, minuti: this.minuti})
  }
  getQuestionById(id: number) {
    for (const iterator of this.statistika) {
      if (iterator.id == id) {
        return iterator;
      }
    }
    return null;
  }
  remove(id: number){
      let q = this.getQuestionById(id);
      if (q == null) {
        return;
      }
      // Vrati poziciju elementa u nizu
      let index = this.statistika.indexOf(q);
      // Brise element iz niza na poziciji koji odgovara vrednosti index
      this.statistika.splice(index, 1);
  }
  
  update (statistika: any) {
    this.isUpdate = true;
    this.poeni = statistika.poeni;
    this.minuti = statistika.minuti;
    this.name = statistika.name;
    this.id = statistika.id;
  }
  
  updateStatistika () {
    this.statistika.forEach((el) => {
      if (el.id === this.id) {
        el.name = this.name;
        el.minuti = this.minuti;
        el.poeni = this.poeni;
        this.isUpdate = false;
        this.poeni = 0;
        this.minuti = 0;
        this.name = '';
        this.id = 0;
      }
    })
  }
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
