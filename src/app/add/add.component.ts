import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private api:ApiService){}
  vehicleNo=""
  ownerName=""
  phoneno=""
  emailid=""
  pincode=""

  readvalue=()=>{
    let data= 
  { 
      "vehicleNo":this.vehicleNo,
    "ownerName":this.ownerName,
    "phoneno": this.phoneno,
    "emailid": this.emailid,
    "pincode": this.pincode
   
}
console.log(data)
this.api.sentvalue(data).subscribe(
  (response :any)=>{
console.log(response)
  }
)
  } 

  ngOnInit(): void {
  }

}
