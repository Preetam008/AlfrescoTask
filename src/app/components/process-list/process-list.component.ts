import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {

  id:string;
number:any;

  constructor(private router: Router,
              private route: ActivatedRoute
              ) { }


  ngOnInit() {
    // this.id=this.service.getUpdatedId();
    // console.log(this.id);//uncomment it

  }
  onRowClick(procId:any){
   if(procId) 
   
    this.router.navigate(['processDetails',procId]);

}
}
