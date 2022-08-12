import { IMessageFooter } from './index.js'

/**
 * This interface defines the object sent to the `DiscordUtil#sendMsg()` method
 * and contains the properties that are required (and optional) to send a
 * message to a Discord Webhook.
 */
export interface IMessageInput {
  url?: string
  title?: string
  color?: string
  text?: string
  imageUrl?: string
  timestamp?: boolean
  description?: string
  thumbnailUrl?: string
  footer?: IMessageFooter
}
