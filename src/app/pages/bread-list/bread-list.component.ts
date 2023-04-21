import { Component } from '@angular/core';
import { breadsData } from 'src/app/core/bread.data';

@Component({
  selector: 'app-bread-list',
  templateUrl: './bread-list.component.html',
  styleUrls: ['./bread-list.component.scss']
})
export class BreadListComponent {

  public bread = breadsData;
  public originalBread = breadsData;
  public inputValue: string = '';
  
  public filterBreads() {
    this.bread = this.originalBread.filter(bread => {
      return bread.name.toLowerCase().includes(this.inputValue.toLowerCase());
    })
  }

}
