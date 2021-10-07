import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Component } from '../../shared/component';

import styles from './button.css';

@customElement('app-button')
export class AppButton extends Component {
	static get styles() { return [styles]; }

	@property()
	variant: string = 'primary'

	_handleClick(event: PointerEvent) {
		console.log('inner click');
		const customEvent = new CustomEvent('event-click', {
			detail: {},
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(customEvent);
	}
	
	render() {
		const classes: string = `${this.variant}`;
		return html`
			<button class=${classes} @click=${this._handleClick}>Sample Text</button>
		`;
	}
}
