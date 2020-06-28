import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.scss']
})
export class DisplayContentComponent implements OnInit {
  taskid:string=null;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskid =params.taskId;
   
  })
}

}
