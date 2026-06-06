import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit{
  constructor(
    private LocationSt:LocationStrategy
  ) { }

  ngOnInit(): void {
      this.prevenirElBotonDeRetroceso();
  }

  prevenirElBotonDeRetroceso(){
    history.pushState(null, null!,location.href);
    this.LocationSt.onPopState(() => {
      history.pushState(null, null!,location.href);
    })
  }
}
