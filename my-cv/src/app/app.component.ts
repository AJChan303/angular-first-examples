import { Component, OnInit } from '@angular/core';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Alex Chan';
  displayWork = false;
  displayEdu = true;
  beers: string[] = ['Yuengling', 'Bud Light', 'Moerlein', 'Breckenridge', 'Barqs']
  ngOnInit(): void {
    console.log('init called');
    
  }
  

log(){
  console.log('button was pressed')
};
}