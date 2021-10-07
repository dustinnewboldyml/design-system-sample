import { html } from 'lit'
import { property, customElement } from 'lit/decorators.js'
import { Component } from '../../shared/component';

import styles from './text.css';

enum TypograpyType {
	Display1 = 'display1',
	D1 = 'd1',
	Display2 = 'display2',
	D2 = 'd2',
	Display3 = 'display3',
	D3 = 'd3',
	Heading1 = 'heading1',
	H1 = 'h1',
	Heading2 = 'heading2',
	H2 = 'h2',
	Paragraph = 'paragraph',
	P = 'p'
};

enum TypographySize {
	large,
	medium,
	default,
	small,
}

@customElement('app-text')
export class AppText extends Component {
	static get styles() {
		return [styles];
	}

	@property()
	type: TypograpyType;

	@property()
	size: TypographySize = TypographySize.default;

	render() {
		console.log(this.type === TypograpyType.H1);
		switch(this.type) {
			case TypograpyType.H1:
			case TypograpyType.Heading1:
				return html`<h1><slot></slot></h1>`;

			case TypograpyType.H2:
			case TypograpyType.Heading2:
				return html`<h2><slot></slot></h2>`;
			
			case TypograpyType.P:
			case TypograpyType.Paragraph:
			default:
				if ( this.size === TypographySize.large ) {
					return html`<p class="large"><slot></slot></p>`;
				} else if ( this.size === TypographySize.small ) {
					return html`<p class="small"><slot></slot></p>`;
				} else {
					return html`<p><slot></slot></p>`;
				}
		}
	}
}
