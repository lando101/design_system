import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidebarData: EventEmitter<any[]> = new EventEmitter<any[]>();
  // activeSibebarTabs: any[];
  key: string;
  windowScrolled: boolean;
  routerLinks: any[] = [
    {id: 1, displayName: 'Home', display: true, href: '/home'},
    {id: 2, displayName: 'Foundation', display: true, href: '/foundation'},
    // {id: 3, displayName: 'Content', display: true, href: '/authenticated//content'},
    {id: 4, displayName: 'Design', display: true, href: '/design'},
    {id: 5, displayName: 'Components', display: true, href: '/components'},
    {id: 6, displayName: 'Accessibility', display: true, href: '/accessibility'}
  ];

  innerWidth: number;


  // MOVE THIS TO DATABASE :: WHY NOT HAVE DIFFERENT ARRAY FOR SIDE TABS DATA AND SEND THROUGH SERVICE?
  sideTabsData = [
    {id: 1, parentID: 4, displayName: 'Overview', toolTip: 'test', display: true, order: 1, area: 'Design', etc: '',
    href: '/design-overview', active: true, icon: ''},
    {id: 2, parentID: 4, displayName: 'Color Palette', toolTip: 'test', display: true, order: 2, area: 'Design', etc: '',
    href: '/color-palette', active: false, icon: 'fas fa-palette'},
    {id: 3, parentID: 4, displayName: 'Icons', toolTip: 'test', display: true, order: 3, area: 'Design', etc: '',
    href: '/icons', active: false, icon: 'far fa-icons'},
    {id: 4, parentID: 4, displayName: 'Typography', toolTip: 'test', display: true, order: 3, area: 'Design', etc: '',
    href: '/typography', active: false, icon: 'fas fa-font'},
    {id: 5, parentID: 2, displayName: 'Foundation item 1', toolTip: 'test', display: true, order: 3, area: 'Foundation', etc: '',
    href: '/typography', active: true, icon: 'fas fa-font'},
    {id: 6, parentID: 2, displayName: 'Foundation item 2', toolTip: 'test', display: true, order: 3, area: 'Foundation', etc: '',
    href: '/typography', active: false, icon: 'fas fa-font'},
    {id: 7, parentID: 2, displayName: 'Foundation item 3', toolTip: 'test', display: true, order: 3, area: 'Foundation', etc: '',
    href: '/typography', active: false, icon: 'fas fa-font'},
  ];

  constructor(public authService: AuthService) { }
  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.onResize(event);
  }

  setSidebar(selectedItem: any) {
    if (selectedItem.id !== 1) {
      this.sidebarData.emit(this.sideTabsData.filter(c => c.parentID === selectedItem.id));
    } else {
      this.sidebarData.emit(null);
    }
  }

  removeStorageState() {
    this.key = 'welcome-animate';
    sessionStorage.removeItem(this.key);
    this.signout();
  }

  signout(){
    this.authService.SignOut()
  }
}
