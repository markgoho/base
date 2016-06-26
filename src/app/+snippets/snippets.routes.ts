import { SnippetsComponent } from './snippets.component';
import { ListComponent } from './+list/list.component';
import { DetailComponent } from './+detail/detail.component';
import { EditComponent } from './+edit/edit.component';
import { AddComponent } from './+add/add.component';

import { AuthGuard } from '../shared/auth.guard';

export const SNIPPETS_COMPONENTS = [
  {
    path: 'snippets',
    component: SnippetsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListComponent },
      { path: 'add', component: AddComponent, canActivate: [AuthGuard] },
      { path: ':id', component: DetailComponent, canActivate: [AuthGuard] },
      { path: ':id/edit', component: EditComponent, canActivate: [AuthGuard] }
    ]
  }
];