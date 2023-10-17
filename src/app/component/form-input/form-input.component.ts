import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroupDirective,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() class!: string;
  @Input() type!: string;
  @Input() helpText!: string;
  @Input() errorText!: string;
  @Input() readOnly!: boolean;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.form = this.rootFormGroup.control;
  }
}
