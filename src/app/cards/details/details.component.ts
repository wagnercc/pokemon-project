import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'pokemon-app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  objPokemon: any;

  ngOnInit(): void {
    this.checkMainRowIsHidden()
    this.route.params.subscribe(
      params => {
        let url = 'https://api.pokemontcg.io/v1/cards/' + params.id;
        this.api.get(url).subscribe(
          data => {
            this.objPokemon = data['card'];
            console.log("oi", data);
          }
        )
      }
    )
  }

  checkMainRowIsHidden() {
    if (!document.getElementById('mainRowList').classList.contains("disp-none")) {
      document.getElementById('mainRowList').classList.add("disp-none")
    }
  }

  backCards() {
    document.getElementById('mainRowList').classList.remove("disp-none");
    this.router.navigate(['cards']);
  }
}
