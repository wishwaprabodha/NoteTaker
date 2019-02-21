import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home-component.component';
import {NoteComponent} from './components/note/note.component';


  const APP_ROUTES: Routes = [
    {path : '', component: HomeComponent },
    {path : 'notes', component : NoteComponent},
  ];
// register routes
export const routing = RouterModule.forRoot(APP_ROUTES);
