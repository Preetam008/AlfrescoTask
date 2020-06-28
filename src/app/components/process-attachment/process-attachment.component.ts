import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-process-attachment',
  templateUrl: './process-attachment.component.html',
  styleUrls: ['./process-attachment.component.scss']
})
export class ProcessAttachmentComponent implements OnInit {
  currentTaskid :string=null;
  currentpId:string=null;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentTaskid =params.aid;
     this.currentpId=params.pid;//comment it
  })

}
onClickRow(completTd:any){
if(completTd){

  this.router.navigate(['display-content',completTd]);
  // this.router.navigate(['processDetails',procId]);
}
}

}
