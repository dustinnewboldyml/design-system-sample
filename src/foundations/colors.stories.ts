import { Meta } from '@storybook/web-components'
import '../styles/theme.css'
import './colors.css'

export default {
	title: 'Foundation/Colors',
} as Meta

const Template = (label: string, variant: string) => {
	return `<span>${label}</span><div class="color ${variant}"></div>`
}

export const Colors = () => {
	return `
    ${Template('primary-interactivity', 'primary-interactivity')}
    ${Template('primary-shade1', 'primary-shade1')}
    ${Template('primary-shade2', 'primary-shade2')}
    ${Template('primary-shade3', 'primary-shade3')}
    ${Template('secondary1', 'secondary1')}
    ${Template('secondary2', 'secondary2')}
    ${Template('accent', 'accent')}
    ${Template('support', 'support')}
    ${Template('error', 'error')}
    ${Template('alert', 'alert')}
    ${Template('copy-black', 'copy-black')}
    ${Template('copy-gray1', 'copy-gray1')}
    ${Template('copy-gray2', 'copy-gray2')}
    ${Template('copy-gray3', 'copy-gray3')}
    ${Template('copy-gray4', 'copy-gray4')}
    ${Template('copy-gray5', 'copy-gray5')}
    ${Template('copy-white', 'copy-white')}
  `
}
