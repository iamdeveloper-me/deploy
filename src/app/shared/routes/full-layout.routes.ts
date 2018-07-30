import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  // {
  //   path: 'userpannel',
  //   loadChildren: './userpannel/userpannel.module#UserpannelModule'
  // },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarsModule'
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  },
  {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  },
  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  },
  {
    path: 'datatables',
    loadChildren: './data-tables/data-tables.module#DataTablesModule'
  },
  {
    path: 'uikit',
    loadChildren: './ui-kit/ui-kit.module#UIKitModule'
  },
  {
    path: 'components',
    loadChildren: './components/ui-components.module#UIComponentsModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'chat-ngrx',
    loadChildren: './chat-ngrx/chat-ngrx.module#ChatNGRXModule'
  },
  {
    path: 'inbox',
    loadChildren: './inbox/inbox.module#InboxModule'
  },
  {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  },
  {
    path: 'taskboard-ngrx',
    loadChildren: './taskboard-ngrx/taskboard-ngrx.module#TaskboardNGRXModule'
  },
  {
    path: 'player',
    loadChildren: './player/player.module#PlayerModule'
  }
];