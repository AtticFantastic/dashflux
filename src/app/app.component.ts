import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	template: `
		<button md-raised-button color=’primary’>this is a magical button</button>
	`
})
export class AppComponent {
  title = 'app works!';
}
