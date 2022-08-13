import { logger } from '@4lch4/logger'
import { MessageBuilder, Webhook } from 'discord-ts-webhook'
import { IDiscordConfig, IMessageInput } from '../interfaces/index.js'
import { MessageDefaults, ErrorMessages } from './constants/index.js'

/**
 * This class is a utility class that provides helper methods for sending
 * messages to Discord webhooks.
 */
export class DiscordUtil {
  private webhook: Webhook

  constructor(private config: IDiscordConfig) {
    this.webhook = new Webhook({
      url: this.getWebhookUrl(),
      retryOnLimit: config.retryOnLimit,
      throwErrors: config.throwErrors
    })

    if (config.avatarUrl) this.webhook.setAvatar(config.avatarUrl)
    if (config.username) this.webhook.setUsername(config.username)
  }

  /**
   * Attempts to retrieve the webhook URL from the configuration, which is
   * provided when creating an instance of the DiscordUtil class. This is done
   * by first checking for the `webhookUrl` property in the configuration, and
   * if it is not found, then we check for the `webhookId` & `webhookToken`
   * properties. If neither of these are found, then an error is thrown.
   *
   * @returns The URL of the webhook.
   * @throws An error if the webhook URL is not found.
   *
   * @see https://discord.com/developers/docs/resources/webhook#execute-webhook
   * @example
   *
   * https://discord.com/api/webhooks/1234567890123456789/GibberishToken
   */
  public getWebhookUrl(): string {
    if (this.config.webhookUrl) return this.config.webhookUrl
    else if (this.config.webhookId && this.config.webhookToken) {
      return `https://discord.com/api/webhooks/${this.config.webhookId}/${this.config.webhookToken}`
    } else {
      throw new Error(ErrorMessages.NO_WEBHOOK_URL)
    }
  }

  /**
   * Builds a message from the input provided using the MessageBuilder class and
   * then returns the MessageBuilder instance to be used with the Discord
   * Webhook.
   *
   * @param input The message input to build the message from.
   * @returns A MessageBuilder object.
   */
  public buildMsg(input: IMessageInput): MessageBuilder {
    const mb = new MessageBuilder()
      .setColor(input.color || MessageDefaults.color)
      .setTitle(input.title || MessageDefaults.title)
      .setDescription(input.description || MessageDefaults.description)
      .setImage(input.imageUrl || MessageDefaults.imageUrl)
      .setText(input.text || MessageDefaults.text)
      .setThumbnail(input.thumbnailUrl || MessageDefaults.thumbnailUrl)
      .setURL(input.url || MessageDefaults.url)

    if (input.timestamp) mb.setTimestamp()

    if (input.footer) mb.setFooter(input.footer.text, input.footer.iconUrl)
    else mb.setFooter(MessageDefaults.footer.text, MessageDefaults.footer.iconUrl)

    return mb
  }

  /**
   * Sends the given input/message to the Webhook instance that's generated when
   * the DiscordUtil class is created.
   *
   * @param input The input to build a message with or the built message to send.
   */
  public async sendMsg(input: IMessageInput | MessageBuilder) {
    if (input instanceof MessageBuilder) await this.webhook.send(input)
    else {
      const msg = this.buildMsg(input)

      await this.webhook.send(msg)
    }
  }

  /**
   * Performs every possible action to send a message to the Discord webhook. It
   * is largely a way to test the Webhook class.
   *
   * @param input The input to build a message with or the built message to send.
   */
  public async testSuite(input?: IMessageInput): Promise<void> {
    const msg = this.buildMsg(input ? input : MessageDefaults)

    logger.info('Sending test message via send() method...')
    await this.webhook.send(msg)

    logger.info('Sending test message via error() method...')
    await this.webhook.error('Test-Title', 'Field-Name', 'Field-Value', true)

    logger.info('Sending test message via info() method...')
    await this.webhook.info('Test-Title', 'Field-Name', 'Field-Value', true)

    logger.info('Sending test message via success() method...')
    await this.webhook.success('Test-Title', 'Field-Name', 'Field-Value', true)

    logger.info('Sending test message via warning() method...')
    await this.webhook.warning('Test-Title', 'Field-Name', 'Field-Value', true)
  }
}
