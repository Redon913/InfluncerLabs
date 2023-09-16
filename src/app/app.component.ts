import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedID !: number;
  dt: any =  []
  
  constructor(private data: DataService){
  }

  getbill(){
    if(this.selectedID){
      this.data.getData('http://localhost:8080/api/getBill/' + this.selectedID).subscribe((res) => {
      console.log(res);
      });
    } else {
      console.log('enter the id for cusrtomer');
      
    }
    

  }

  getAlloders(){

    this.data.getData('http://localhost:8080/api/getAlloders/').subscribe((res) => {
      console.log(res);
    });  
  }
}
