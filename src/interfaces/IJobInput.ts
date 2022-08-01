/**
 * A JSON object that is passed to the job when it is started. The generic type
 * `P` is the type of object containing the Plugin's custom parameters.
 */
export interface IJobInput<P> {
  /** A unique alphanumeric ID assigned to the job. */
  id: string

  /** The hostname of the server currently processing the job. */
  hostname: string

  /** The exact command that was executed to start your Plugin. */
  command: string

  /** The Event ID of the event that fired off the job. */
  event: string

  /**
   * A unix timestamp representing the "current" time for the job.
   *
   * @see https://github.com/jhuckaby/Cronicle#json-input
   */
  now: number

  /**
   * A fully-qualified filesystem path to a unique log file specifically for the
   * job, which can be used by the plugin.
   */
  log_file: string

  /**
   * An object containing your Plugin's custom parameters, filled out with
   * values from the Event Editor.
   */
  params: P | any

  /** Custom user data, if applicable. */
  chain_data?: any

  /** The ID of the original event that started the chain reaction. */
  source_event?: string

  /** The error code from the original job, or 0 for success. */
  chain_code?: number

  /** The error description from the original job, if applicable. */
  chain_description?: string
}
