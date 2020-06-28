// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TaskDetailsEvent } from '@alfresco/adf-process-services';

// @Component({
//   selector: 'app-process-detail',
//   templateUrl: './process-detail.component.html',
//   styleUrls: ['./process-detail.component.scss']
// })
// export class ProcessDetailComponent implements OnInit {
//   prId:string=null;
//   currentTaskId:string=null;
  
//   private tabs={tasks:0,process:1,report:2};
//   activeTab:number=this.tabs.tasks;
//   constructor(private router:Router,private route:ActivatedRoute) { }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.prId =params.pid;
//   })
// }
// onTaskClick(event:TaskDetailsEvent):void{
//   event.preventDefault();
//   this.activeTab=this.tabs.tasks;
//   const taskId=event.value.id;
//   const processTaskDataRow:any={
//     id:taskId,
//     name:event.value.name ,
//     created:event.value.created
//   };
//   this.currentTaskId=taskId;
//  // this.router.navigate(['/activeTask',this.currentTaskId])//please uncomment
//   this.router.navigate(['/activeTask',this.currentTaskId,this.prId])
//   }

  

// };



// ..........................................................................


import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDetailsEvent } from '@alfresco/adf-process-services';
import { UploadService } from '@alfresco/adf-core';//comment
import {  ProcessAttachmentListComponent, ProcessUploadService } from '@alfresco/adf-process-services';//comment


@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {
  prId:string=null;
  currentTaskId:string=null;
  private tabs={tasks:0,process:1,report:2};
  activeTab:number=this.tabs.tasks;

    @ViewChild(ProcessAttachmentListComponent)
    processAttachList: ProcessAttachmentListComponent;

    fileShowed: boolean = false;
    content: Blob;
    contentName: string;

  constructor(private router:Router,private route:ActivatedRoute,private uploadService: UploadService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prId =params.pid;
  })
  this.uploadService.fileUploadComplete.subscribe(value => this.onSuccess(value.data));

}

onSuccess(content: any) {
  this.processAttachList.add(content);
}


onAttachmentClick(content: any): void {
  this.fileShowed = true;
  this.content = content.contentBlob;
  this.contentName = content.name;
}


onTaskClick(event:TaskDetailsEvent):void{
  event.preventDefault();
  this.activeTab=this.tabs.tasks;
  const taskId=event.value.id;
  const processTaskDataRow:any={
    id:taskId,
    name:event.value.name ,
    created:event.value.created
  };
  this.currentTaskId=taskId;
 // this.router.navigate(['/activeTask',this.currentTaskId])//please uncomment
  this.router.navigate(['/activeTask',this.currentTaskId,this.prId])
  }

};





