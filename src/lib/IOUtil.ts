import fs from 'fs-extra'

/**
 * A helper class with functions for interacting with the file system as well as
 * `STDIN` & `STDOUT`.
 */
export class IOUtil {
  /**
   * Reads STDIN and returns the contents as a JSON object. If you know the
   * interface/schema of the input object, you can pass an interface as the `T`
   * generic and the object returned will be of type `T`, which defaults to the
   * `any` type.
   *
   * @returns The input object for the job.
   */
  public async readPipedInput<T = any>(): Promise<T> {
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

  /**
   * Reads the content of the file at the given path with the UTF-8 encoding and
   * returns the resulting string.
   *
   * @param path The path to the file to be read.
   *
   * @returns The content of the file at the given path.
   */
  async readFile(path: string): Promise<string> {
    return fs.readFile(path, 'utf8')
  }

  /**
   * Reads the file at the given path as a JSON file and returns the contents as
   * the generic type `T`, which defaults to `any` if not specified.
   *
   * @generic `T` The type of the object to be returned.
   *
   * @param path The path to the file to be read.
   *
   * @returns The content of the file at the given path.
   */
  async readJSON<T = any>(path: string): Promise<T> {
    return fs.readJSON(path)
  }
}
