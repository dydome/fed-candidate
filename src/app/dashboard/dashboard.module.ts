import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { RemovedItemsComponent } from './removed-items/removed-items.component';


@NgModule({
    declarations: [
        DashboardComponent,
        PhotosComponent,
        PostsComponent,
        RemovedItemsComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HttpClientModule,
    ]
})
export class DashboardModule {}
