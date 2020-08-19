import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

name = '';
passcode = '';
myProperty = 'this write in script';

  public challenges = [];
  public bScore = 0;
  public jScore = 0;

  constructor( /*private modalService: NgbModal*/) {
    console.log("main")
    var t = this;

    db.collection("teams").doc("Jonathan")
    .onSnapshot(function(doc) {
        t.jScore = doc.data().score;
    });

    db.collection("teams").doc("Bachelors")
    .onSnapshot(function(doc) {
        t.bScore = doc.data().score;
    });

    db.collection("challenges")
    .onSnapshot(function(querySnapshot) {
        t.challenges = [];
        querySnapshot.forEach(function(doc) {
            var fullData = doc.data();
            fullData.chalId = doc.id;
            t.challenges.push(fullData);
        });
        console.log(t.challenges);
    });
  }

  open(content) {
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("passcode"));
    //this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: 'static', keyboard: false})
  }

  submit(content){
    localStorage.setItem("name", this.name);
    localStorage.setItem("passcode", this.passcode);
    localStorage.setItem("newUser", "true");
    document.getElementById("closeModal").click();
  }

  ngOnInit(): void {
    var newUser = localStorage.getItem('newUser');
    console.log(newUser);
    if(localStorage.getItem("newUser") == null){
      document.getElementById("launchModal").click()

    }
  }

  sendRequest(data) {
    var fullData = data;
    fullData.requester = localStorage.getItem("name");
    db.collection("requests").add(data);

    /*db.collection("challenges").doc(data.id).update({
      attempts: data.attempts-1;
    });*/

    var chal = db.collection("challenges").doc(data.chalId);

    // Set the "capital" field of the city 'DC'
    chal.update({
        attempts: data.attempts - 1
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    console.log(data);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
