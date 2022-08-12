import { IMessageInput } from '../../interfaces/index.js'

export const CronicleLogoURL = 'https://assets.4lch4.cloud/projects/cronicle/Logo-1024.png'
export const TestMessageText = 'This is a test message.'

/**
 * An object containing all the default values for sending a new message via a
 * Discord Webhooks.
 */
export const MessageDefaults: Required<IMessageInput> = {
  color: '#0099ff',
  timestamp: true,
  footer: {
    text: 'Cronicle',
    iconUrl: CronicleLogoURL
  },
  description: TestMessageText,
  thumbnailUrl: CronicleLogoURL,
  title: `Title — ${TestMessageText}`,
  text: TestMessageText,
  imageUrl: CronicleLogoURL,
  url: CronicleLogoURL
}
