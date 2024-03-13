import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-carros',
  templateUrl: './loading-carros.component.html',
  styleUrls: ['./loading-carros.component.scss'],
})
export class LoadingCarrosComponent  implements OnInit {
  dummy = Array(10)
  constructor() { }

  ngOnInit() {}

}
