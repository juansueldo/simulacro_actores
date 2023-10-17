import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesService } from 'src/app/services/paises.service';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent implements OnInit {
  paises: Array<Pais> = [];
  @Output() selectCountryEvent = new EventEmitter<Pais>();
  constructor(private paisesServices: PaisesService) {}

  ngOnInit(): void {
    this.paisesServices.getPaises().then((res) => {
      console.log(res);
      res.forEach((item: any) => {
        const pais = new Pais(item.name.common, item.flags.png, item.languages);
        this.paises.push(pais)
      });
    });
  }

  onClick(country: any) {
    this.selectCountryEvent.emit(country);    
  }

}