import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { breadsData } from 'src/app/core/bread.data';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
public breadForm?: FormGroup;
public hasFormError: boolean = false;
public hasSuccess: boolean = false;

constructor(
  private formBuilder: FormBuilder,
  private router: Router
  ) {
    this.breadForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      zone: new FormControl('', [Validators.required]),
      image: ['', [Validators.required]]
    });
  }

  public handleBread() {
    if (this.breadForm?.valid) {
      const breadCopy = [...breadsData];
      const greaterId = breadCopy.sort((a, b) =>{
        return parseInt(b.id, 10) - parseInt(a.id, 10);
      })[0]?.id;
      const newId = (parseInt(greaterId, 10) + 1).toString();
      breadsData.push({
        ...this.breadForm?.value,
        id: newId
      });
      this.breadForm.reset();
      this.hasFormError = false;
      const continueCreating = window.confirm('¿Quieres seguir agregando panes?');
      if (!continueCreating) {
        this.router.navigate(['../bread-list']);
      } 
    } else {
      this.hasFormError = true;
    }
  }

}
