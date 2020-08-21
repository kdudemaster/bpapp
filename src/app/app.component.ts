import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JS Bachelor Party';
  isMenuCollapsed = true;
  loopFlag = false;
  name = "";
  passcode = "";

  constructor(private modalService: NgbModal) {}

  open(content) {
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("passcode"));
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: 'static', keyboard: false})
  }

  submit(content){
    console.log("name")
    console.log(this.name)
    localStorage.setItem("name", this.name);
    localStorage.setItem("passcode", this.passcode);
    localStorage.setItem("newUser", "true");
    document.getElementById("closeModal").click();
    console.log("loopFlag")
    console.log(localStorage.getItem("name"))
  }

  ngOnInit(): void {
    if(localStorage.getItem("name") == "Pat"){
      this.loopFlag = true;
    }
  }
}
