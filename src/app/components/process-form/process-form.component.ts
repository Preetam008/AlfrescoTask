import { Component, OnInit } from '@angular/core';
import { AppDefinitionRepresentationModel } from '@alfresco/adf-process-services';
import { ProcessInstance } from '@alfresco/adf-process-services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.scss']
})
export class ProcessFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  // onStartProcess(event:any){
  //   console.log(event['id']);
  //   this.service.updateId(event['id']);
  //   this.router.navigate(['/processList']);
  // }

  onStartProcess(event:any){
    
    this.router.navigate(['/processList']);
  }

}
