import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ListCardsPokemon } from '../objects/list-cards-pokemon';

@Component({
  selector: 'pokemon-app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private api: ApiService) { }

  cardsPokemon: ListCardsPokemon[];
  searchInput: any;

  ngOnInit(): void {
    this.callCardsPokemon();
    if (document.getElementById('mainRowList').classList.contains("disp-none"))
      document.getElementById('mainRowList').classList.remove("disp-none");
  }

  callCardsPokemon() {
    let url = 'https://api.pokemontcg.io/v1/cards';
    this.api.get(url).subscribe(
      data => {
        //localeCompare realiza comparações de dados
        //caso um nome for menor (antes) do que outro, retorna número negativo
        //caso um nome for maior (após) do que outro, retorna número positivo
        //caso um nome for igual (mesmo dado) do que outro, retorna 0
        //e o sort ordena o array usando esses número de retorno, jogando antes, após ou deixando da forma que está
        this.cardsPokemon = data['cards'].sort((a, b) => a.name.localeCompare(b.name));
      },
      err => {
        alert("Ocorreu um erro para buscar os pokemons");
        console.log("erro", err);
      }
    )
  }

  activeDisplayNone() {
    document.getElementById('mainRowList').classList.add("disp-none");
  }

}
