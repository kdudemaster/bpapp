import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reqs-log',
  templateUrl: './reqs-log.component.html',
  styleUrls: ['./reqs-log.component.css']
})
export class ReqsLogComponent implements OnInit {

  public requests = [];

  constructor() {
    var t = this;
    var r = [];
    //@ts-ignore
    db.collection("requestsLog")
    .onSnapshot(function(querySnapshot) {
      t.requests = [];
      querySnapshot.forEach(function(doc) {
        var fullData = doc.data();
        fullData.id = doc.id;
        t.requests.push(fullData);
      });
    });
  }

  ngOnInit(): void {
  }

  acceptReq(data){
    //delete request
    //@ts-ignore
    db.collection("requests").doc(data.id).delete();

    var storyRef = null;
    var requester = data.requester;
    var jon = "Jonathan;"
    var mult = 1;

    //console.log(requester)
    //console.log(jon)
    //console.log(requester.localeCompare(jon))

    console.log("comp")
    console.log(requester)
    console.log(jon)
    console.log(requester == "Jonathan")

    if(requester == "Jonathan"){
      //@ts-ignore
      this.storyRef = db.collection('teams').doc('Jonathan');
      mult = 3;
    }
    else{
      //@ts-ignore
      this.storyRef = db.collection('teams').doc('Bachelors');
      mult = 1;
    }
    //increment counter
    //@ts-ignore
    const increment = firebase.firestore.FieldValue.increment(data.value * mult);

    // Update read count
    //@ts-ignore
    this.storyRef.update({ score: increment });

    console.log(data);
  }

  denyReq(data){
    //increment original counter
    //@ts-ignore
    const increment = firebase.firestore.FieldValue.increment(1);
    //@ts-ignore
    const storyRef = db.collection('challenges').doc(data.chalId);
    storyRef.update({ attempts: increment });

    //delete request
    //@ts-ignore
    db.collection("requests").doc(data.id).delete();
    console.log(data);
  }
}
