import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Component } from '../../shared/component';

import styles from './card.css';

@customElement('app-card')
export class AppCard extends Component {
	static get styles() {
		return [styles];
	}

	onClick() {
		console.log('clicked');
	}

	onCustomEvent() {
		console.log('custom event clicked');
	}

	render() {
		return html`
			<app-button variant="secondary" @click=${this.onClick} @event-click=${this.onCustomEvent}></app-button>
		`;
	}
}
