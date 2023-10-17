import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {
  actores$: Observable<Actor[]>;
  @Output() selectedActor = new EventEmitter<Actor>();

  constructor(private actorService: ActorService){}
  ngOnInit(): void {
    this.actores$ = this.actorService.loadActores();
  }

  onClick(actor: any) {
    this.selectedActor.emit(actor);    
  }
}
