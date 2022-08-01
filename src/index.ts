import { IJobInput, IJobOutput } from './interfaces'
import { IOUtil } from './utils'

export { IJobInput, IJobOutput }

/**
 * Initialize a Cronicle job. Returns the job input object read from STDIN.
 *
 * @returns The input object for the job.
 */
export async function initJob<P>(): Promise<IJobInput<P>> {
  const ioUtil = new IOUtil()

  return ioUtil.readPipedInput<IJobInput<P>>()
}

/**
 * Ends the execution of the job by writing the output to STDOUT using
 * `JSON.stringify()` and then exiting the process using the code provided in
 * `output.code`. The exit code defaults to 0 unless otherwise specified.
 *
 * @param output The output object to be written to STDOUT.
 */
export async function endJob(output: IJobOutput): Promise<void> {
  // Update the output object to include the exit code if it is not already set.
  output = {
    ...output,
    code: output.code || 0
  }

  console.log(JSON.stringify(output))
  process.exit(output.code)
}
