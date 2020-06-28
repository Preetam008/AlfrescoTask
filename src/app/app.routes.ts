/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardBpm, AuthGuardEcm } from '@alfresco/adf-core';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './components/demo/demo.component';
import { ProcessFormComponent } from './components/process-form/process-form.component';
import { ProcessListComponent } from './components/process-list/process-list.component';
import { ProcessDetailComponent } from './components/process-detail/process-detail.component';
import { ActiveTaskComponent } from './components/active-task/active-task.component';
import { ProcessAttachmentComponent } from './components/process-attachment/process-attachment.component';
import { DisplayContentComponent } from './components/display-content/display-content.component';
import { ShowDocsComponent } from './components/show-docs/show-docs.component';
//import { ProcessAttachmentComponent } from './components/process-attachment/process-attachment.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'apps',
    component: DemoComponent
  },
  {
    path: 'process',
    component: ProcessFormComponent
  },
  {
    path:'processList',
    component:ProcessListComponent
  },
  {
    path:'processDetails/:pid',
    component:ProcessDetailComponent
  },
  // {
  //   path:'activeTask/:aid',
  //   component:ActiveTaskComponent
  // },
  {
    path:'activeTask/:aid/:pid',//comment it
    component:ActiveTaskComponent
  },
{
  path:'processAttach/:pid/:aid',
  component:ProcessAttachmentComponent
},
{
  path:'display-content/:taskId',
  component:DisplayContentComponent
},
{
  path:'show-docs/:pId',
  component:ShowDocsComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
