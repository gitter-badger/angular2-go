import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<h2>Dashboard</h2>
		<div>Hello {{name}}</div>
		<input [(ng-model)]="name" />
		<button (click)="sayHello()">Say Hello</button>
		<p>{{message}}</p>
	`,
	directives: [FORM_DIRECTIVES]
})
export class DashboardComponent {
	name = 'john';
	message = '';

	sayHello() {
		this.message = `Hello ${this.name}!`;
	}
}
