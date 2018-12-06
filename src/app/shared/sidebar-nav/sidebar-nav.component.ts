import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
    selector: 'app-sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.css']
})

export class SidebarNavComponent implements OnInit {
    constructor(private _router: Router) { }
    private isSidebarExpanded = false;
    private nav = [
        { name: 'Dashboard', iconName: 'fa fa-tachometer', routeUrl: 'admin/dashboard' },
        { name: 'Grid', iconName: 'fa fa-table', routeUrl: 'admin/grid' },
        {
            name: 'raja', iconName: 'fa fa-tachometer', subMenu:
                [
                    { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                    { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                    { name: 'subMenu1', iconName: 'fa fa-tachometer' }
                ]
        },
        { name: 'suthakar' },
        {
            name: 'raja', subMenu: [
                {
                    name: 'subMenuAdd', iconName: 'fa fa-tachometer', subMenu:
                        [
                            { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                            { name: 'subMenu2', iconName: 'fa fa-tachometer' },
                            { name: 'subMenu3', iconName: 'fa fa-tachometer' }
                        ]
                },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' }]
        },
        {
            name: 'raja', subMenu:
                [
                    { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                    { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                    { name: 'subMenu1', iconName: 'fa fa-tachometer' }
                ]
        },
        { name: 'suthakar' },
        { name: 'suthakar' },
        {
            name: 'raja', subMenu: [
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' }
            ]
        },
        { name: 'suthakar' },
        {
            name: 'raja', subMenu: [
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' }
            ]
        },
        {
            name: 'raja', subMenu: [
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' }
            ]
        },
        { name: 'suthakar' },
        { name: 'suthakar' },
        {
            name: 'raja', subMenu: [
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' }
            ]
        },
        { name: 'suthakar' },
        {
            name: 'raja', subMenu: [
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' }
            ]
        },
        {
            name: 'raja', subMenu: [
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' },
                { name: 'subMenu1', iconName: 'fa fa-tachometer' }
            ]
        }
    ];

    ngOnInit() {
        $('.sideMenu').slimScroll({
            height: window.innerHeight - 60 + 'px'
        });
    }

    sideBarExpand() {
        this.isSidebarExpanded = true;
    }
    sideBarCollapse() {
        this.isSidebarExpanded = false;
    }

    sideMenuClick(event, routeUrl, subMenuCount, from) {
        if (routeUrl) {
            this._router.navigate([routeUrl]);
        }
        if (subMenuCount) {
            event.currentTarget.classList.toggle('expand');
        } else {
            const activeElement = document.querySelectorAll('.sideMenu li > a.active');
            if (activeElement.length > 0) {
                activeElement[0].classList.remove('active');
            }

            const selectedElement = document.querySelectorAll('.sideMenu li a.selected');
            if (selectedElement.length > 0) {
                for (let i = 0; i < selectedElement.length; i++) {
                    selectedElement[i].classList.remove('selected');
                }
            }

            if (from === 'subMenu') {
                event.currentTarget.parentElement.parentElement.previousElementSibling.classList.add('selected');
            } else if (from === 'addMenu') {
                const mainMenu = event.currentTarget.parentElement.parentElement.parentElement.parentElement.previousElementSibling;
                mainMenu.classList.add('selected');
                event.currentTarget.parentElement.parentElement.previousElementSibling.classList.add('selected');
            }

            event.currentTarget.classList.add('active');
        }
    }
}
