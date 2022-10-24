import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component"
import { ListRenderComponent } from "./components/list-render/list-render.component"

const routes: Routes = [
    {
        path: '', component: FirstComponentComponent
    },
    {
        path: 'list', component: ListRenderComponent
    },
    {
        path: 'change-number', component: ChangeNumberComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutesModule {}