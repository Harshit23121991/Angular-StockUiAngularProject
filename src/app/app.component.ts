import { Component , OnInit} from '@angular/core';
import { StockService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userName : string ='';
  quoteData : string ='';
  public responseData: Details[];
  //public requestBody = {
  // userName: '',
  // quotes: Array<string>()
 // };

  userInput :UserInput = new UserInput();
   public postResponseData: Array<string>;
  constructor(private apiService: StockService) { }

  ngOnInit() {
    //this.apiService.getStock();
  }

  public add(){
    console.log('add');
//  this.requestBody.userName = this.userName;
//  this.requestBody.quotes.push(this.quoteData)
    this.userInput.quotes.push(this.quoteData)
    this.userInput.userName = this.userName;
      this.apiService.postStockInfo(this.userInput).subscribe((res) => {
      this.postResponseData = res;
    });
  }

  retrieve(){
    this.apiService.getStock(this.userName).subscribe((res) => {
      this.responseData = res;
    });
  }

  
}

export interface Details{
   quote :string;
   price : string;
}

export class UserInput{
   quotes :Array<string> = [];
   userName : string;
}

