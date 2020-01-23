import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['/dashboard'])
  }
}
