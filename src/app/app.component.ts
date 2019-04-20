import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    selectedIndex = 0;
    const
    menuCategoryList = [
        {
            name: 'Content',
            expanded : true,
            children: [
                {
                    name: 'Customer',
                    icon: 'person',
                    routerLink: '/customers'
                },
                {
                    name: 'Order',
                    icon: 'book',
                    routerLink: '/orders'
                },
                {
                    name: 'Message',
                    icon: 'message',
                    routerLink: '/messages'
                }
            ]
        },
        {
            name: 'Report',
            expanded : false,
            children: [
                {
                    name: 'Sales',
                    icon: 'attach_money',
                    routerLink: ''
                },
                {
                    name: 'Products',
                    icon: 'storage',
                    routerLink: ''
                }
                , {
                    name: 'Customers',
                    icon: 'people',
                    routerLink: ''
                }
            ]
        }
    ];


    isPanelExpanded(index) {
        if (this.selectedIndex === index) {
            return true;
        } else {
            return false;
        }
    }

    onMenuCategoryClick(selectedIndex) {
        this.selectedIndex = selectedIndex;
    }
}
