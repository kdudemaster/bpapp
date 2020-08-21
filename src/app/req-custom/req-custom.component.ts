import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-req-custom',
  templateUrl: './req-custom.component.html',
  styleUrls: ['./req-custom.component.css']
})
export class ReqCustomComponent implements OnInit {

  title="";
  requester = "";
  value = "";

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    var data ={
      title: this.title,
      requester: this.requester,
      value: this.value
    };
    //@ts-ignore
    db.collection("requests").add(data);
    
    this.title = "";
    this.requester = "";
    this.value = "";
  }
}
