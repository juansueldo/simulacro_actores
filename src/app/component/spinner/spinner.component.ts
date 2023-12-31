import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() showSpinner!: boolean;
  constructor() {}
  ngOnInit(): void {}
}
