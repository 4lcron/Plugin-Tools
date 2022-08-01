/**
 * A helper class with functions for interacting with the file system as well as
 * `STDIN` & `STDOUT`.
 */
export class IOUtil {
  /**
   * Reads STDIN and returns the contents as a JSON object of the given generic
   * type `T`.
   *
   * @returns The input object for the job.
   */
  readPipedInput<T = any>(): Promise<T> {
    return new Promise((resolve, reject) => {
      try {
        var data: string = ''

        process.stdin.resume()
        process.stdin.setEncoding('utf8')

        process.stdin.on('data', function (chunk) {
          if (chunk) data += chunk
        })

        process.stdin.on('end', function () {
          if (data !== undefined) {
            const parsed = JSON.parse(data)
            resolve(parsed as T)
          }
        })
      } catch (err) {
        reject(err)
      }
    })
  }
}
