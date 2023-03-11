import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
  constructor(private api:ApiService){this.datafromApi()}

  datafromApi=()=>{
    this.api.fetchViewAll().subscribe(
      (response:any)=>{
this.ViewAll=response
      }
    )
  }


  ViewAll:any=[]


  ngOnInit(): void {
  }
}
