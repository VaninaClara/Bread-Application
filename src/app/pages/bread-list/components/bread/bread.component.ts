import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreadI } from 'src/app/core/bread.interface';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.scss']
})
export class BreadComponent {
    @Input() public breadToShow?: BreadI;

    constructor (
        private router: Router
    ) {}

    public navigateToDetail(id: string) {
        this.router.navigate(['bread-detail', id]);
    }
}

