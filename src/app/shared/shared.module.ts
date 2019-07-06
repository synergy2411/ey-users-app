import { TestService } from './../services/test.service';
import { CounterService } from './../lazy/services/counter.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers :   [TestService]
})
export class SharedModule { 
  // static forRoot () : ModuleWithProviders{
  //   return {
  //     ngModule : SharedModule,
  //     providers :   [CounterService]
  //   }
  // }
}
