import { Story, Meta } from '@storybook/web-components'
import '../styles/theme.css'
import './typography.css'

export default {
	title: 'Foundation/Typography',
} as Meta

const Template = (label: string, variant: string) => {
	return `<span>${label}</span><div class="color ${variant}"></div>`
}

export const Typography = () => {
	return `
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
        <p>Paragraph – lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique esse delectus consequatur vero et rerum provident eligendi. Provident officiis reiciendis, consequatur dolorum laboriosam maxime numquam nihil dignissimos asperiores nulla?</p>
    `;
}
