import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Component } from '../../shared/component'

import styles from './app.css'

@customElement('app-base')
export class AppBase extends Component {
	static get styles() {
		return [styles]
	}

	render() {
		return html` <div>This is a sample application<slot></slot></div> `
	}
}
