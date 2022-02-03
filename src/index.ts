import { IJobInput, IJobOutput } from './interfaces'
import { IOUtil } from './utils'

export { IJobInput, IJobOutput }

export async function initJob<P>(): Promise<IJobInput<P>> {
  const ioUtil = new IOUtil()

  return ioUtil.readPipedInput<IJobInput<P>>()
}

export async function endJob(output: IJobOutput): Promise<void> {
  console.log(JSON.stringify(output))
  process.exit(output.code)
}
