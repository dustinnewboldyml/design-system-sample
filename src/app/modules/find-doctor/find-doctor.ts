import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Component } from '../../shared/component';

import styles from './find-doctor.css';

@customElement('app-find-doctor')
export class AppFindDoctor extends Component {
	static get styles() {
		return [styles];
	}

	render() {
		return html`
			<div class="find-doctor">
				<app-text type="h2">Find a doctor</app-text>
				<app-text class="description" type="p" size="small">Our medical staff are highly trained. Search Mayo Clinic medical departments, specialty clinics, programs, centers and treatment services.</app-text>
			</div>
		`;
	}
}
