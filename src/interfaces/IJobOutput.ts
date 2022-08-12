/** The output object used when displaying tabular data. */
export interface ITableOut {
  /** Optional title displayed above the table, defaults to "Job Stats". */
  title?: string

  /**
   * Optional array of header columns, displayed in shaded bold above the main
   * data rows.
   */
  header?: string[]

  /**
   * Required array of rows, with each one being its own inner array of column
   * values.
   */
  rows: any[]

  /** Optional caption to show under the table (centered, small gray text). */
  caption?: string
}

/**
 * An object representing the various properties available when displaying
 * output from a job. All of the properties can be passed in separate objects,
 * with exception of the complete property, which is used to determine whether
 * the job is complete or not. For more information, refer to the Cronicle
 * documentation:
 *
 * https://github.com/jhuckaby/Cronicle#writing-plugins
 */
export interface IJobOutput {
  complete?: number
  code?: number
  description?: string

  /** A number indicating how complete the task is. (0.5 = 50%) */
  progress?: number
  notify_success?: string
  notify_fail?: string

  chain?: string
  chain_error?: string

  table?: ITableOut
}
