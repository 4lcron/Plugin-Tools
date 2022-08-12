import { IJobInput, IJobOutput } from './interfaces/index.js'
import { DiscordUtil, IOUtil } from './lib/index.js'

// #region Helper/Utility Functions
/**
 * Initialize a Cronicle job. Returns the job input object read from STDIN. The
 * `Params` generic type is the type of object that is passed in as custom
 * properties for the plugin.
 *
 * @returns The input object for the job.
 */
export async function initJob<Params>(): Promise<IJobInput<Params>> {
  const ioUtil = new IOUtil()

  return ioUtil.readPipedInput<IJobInput<Params>>()
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
// #endregion Helper/Utility Functions

const dUtil = new DiscordUtil({
  webhookUrl:
    'https://discord.com/api/webhooks/1000947228678049913/141v4iiAHzMfxiSqzSVXDz2Z0nHRm2aT80kSEP0CQXU8MmmTzoGUSoturdO7iv3CZ_OJ'
})

dUtil
  .sendMsg({
    title: 'Hello, world.',
    description: 'This is a test message.',
    text: 'Ehhh... Is this thing on?'
  })
  .then(res => {
    console.log(res)
    console.log('Execution completed successfully!')
  })
  .catch(err => {
    console.error('Error received during sendMsg() execution:')
    console.error(err)
  })

export * from '@4lch4/logger'
export * from './lib/index.js'
export { IJobInput, IJobOutput }
