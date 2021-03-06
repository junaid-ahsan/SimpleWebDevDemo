import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  posts$: Object;
  constructor(private api: ApiService) { 
    
  }

  ngOnInit() {
    this.api.getData().subscribe(
      api => this.posts$ = api
    )
  }

}
