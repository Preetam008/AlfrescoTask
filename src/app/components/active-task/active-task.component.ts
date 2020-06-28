import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.scss']
})
export class ActiveTaskComponent implements OnInit {
  activeTaskid:string=null;
  processId:string=null;//comment it
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activeTaskid =params.aid;
      this.processId=params.pid;//comment it
  })

}
onFormCompleted(event:any){
  this.router.navigate(['/processAttach',this.processId,this.activeTaskid])
}
}
