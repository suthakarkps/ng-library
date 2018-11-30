import { Component } from '@angular/core';

@Component({
    selector: 'sidebar-nav',
    templateUrl: './sidebar-nav.component.html',
    styleUrls: ['./sidebar-nav.component.css']
})

export class SidebarNavComponent {
    private isSidebarExpanded = true;
    private nav = [
        { name: "suthakar", iconName: "fa fa-tachometer" },
        { name: "suthakar", iconName: "fa fa-tachometer" },
        { name: "raja", iconName: "fa fa-tachometer", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "suthakar" },
        { name: "raja", subMenu: [{ name: "subMenuAdd", iconName: "fa fa-tachometer", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu2", iconName: "fa fa-tachometer" }, { name: "subMenu3", iconName: "fa fa-tachometer" }] }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "raja", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "suthakar" },
        { name: "suthakar" },
        { name: "raja", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "suthakar" },
        { name: "raja", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "raja", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "suthakar" },
        { name: "suthakar" },
        { name: "raja", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "suthakar" },
        { name: "raja", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] },
        { name: "raja", subMenu: [{ name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }, { name: "subMenu1", iconName: "fa fa-tachometer" }] }
    ]

    sideBarExpand() {
        this.isSidebarExpanded = true;
    }
    sideBarCollapse() {
        this.isSidebarExpanded = false;
    }

    sideMenuClick(event, routeUrl, subMenuCount, from) {
        if (subMenuCount) {
            event.currentTarget.classList.toggle('expand')
        }
        else {
            let activeElement = document.querySelectorAll(".sideMenu li > a.active");
            if (activeElement.length > 0) {
                activeElement[0].classList.remove('active');
            }

            let selectedElement = document.querySelectorAll(".sideMenu li a.selected");
            if (selectedElement.length > 0) {
                for (let i = 0; i < selectedElement.length; i++) {
                    selectedElement[i].classList.remove('selected');
                }
            }

            event.currentTarget.classList.add('active');
            if (from == 'subMenu') {
                event.currentTarget.parentElement.parentElement.previousElementSibling.classList.add('selected');
            }
            else if (from == 'addMenu') {
                event.currentTarget.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('selected');
                event.currentTarget.parentElement.parentElement.previousElementSibling.classList.add('selected');
            }
        }
    }
}