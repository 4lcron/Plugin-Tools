export interface IDiscordConfig {
  /**
   * The URL for the Discord Webhook.
   *
   * You must provide either this or the `webhookId` & `webhookToken` fields.
   */
  webhookUrl?: string

  /**
   * The optional ID for the Discord Webhook.
   *
   * You must provide either this and the `webhookId` field, or the `webhookUrl`
   * field.
   */
  webhookId?: string

  /**
   * An optional field for the token of the Discord Webhook.
   *
   * You must provide either this and the `webhookId` field, or the `webhookUrl`
   * field.
   */
  webhookToken?: string

  /** Whether or not to attempt to resend messages if rate-limited. */
  retryOnLimit?: boolean

  /** Whether or not to throw an error if one is encountered. */
  throwErrors?: boolean

  /**
   * The optional username to use for the name of the bot when sending a message
   * to the Discord Webhook. If not provided, the username will be the name of
   * the Webhook in the channel settings.
   */
  username?: string

  /**
   * An optional URL to an image that when provided is used as the avatar of the
   * bot when sending a message to the Discord Webhook. If not provided, the
   * avatar will be the avatar of the Webhook in the channel settings.
   */
  avatarUrl?: string
}
