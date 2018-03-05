import { NgModule } from '@angular/core';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { MinicartComponent } from './minicart/minicart';
@NgModule({
	declarations: [CustomHeaderComponent,
    MinicartComponent],
	imports: [],
	exports: [CustomHeaderComponent,
    MinicartComponent]
})
export class ComponentsModule {}
