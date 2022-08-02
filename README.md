[![Drone Build Status][0]][1] [![NPM License][2]][3] [![NPM Version][4]][5] [![Monthly Downloads (NPM)][6]][7] [![Snyk Vulnerabilities for npm package][8]][9]

[![code style: prettier][10]][11] [![Discord][12]][13] [![Twitter-Profile][14]][15]

# Cronicle Plugin Tools

This project is to provide some helper functions to a new NodeJS module that wishes to be a [Cronicle Plugin][16].

## Exported Members

The following list defines/describes the members that are exported by the [@4is-cronicle/plugin-tools][17] package:

- [@4lch4/logger][18]
  - All exported members of the `@4lch4/logger` library are also exported by `@4is-cronicle/plugin-tools`.
- Interfaces
  - [IJobInput][19]
  - [IJobOutput][20]
- Top-Level Functions
  - `initJob`
    - Initialize a Cronicle job. Returns the job input object read from STDIN.
    - Returns an object of type [IJobInput][19].
  - `endJob`
    - Ends the execution of the job by writing the output to STDOUT using `JSON.stringify()` and then exiting the process using the code provided in `output.code`. The exit code defaults to **0** unless otherwise specified.
    - Requires a parameter object of type [IJobOutput][20].
- Utility Class(es)
  - [IOUtil][21]
    - Provides the `readPipedInput` method for reading input from STDIN and parsing it as a JSON object.

[0]: https://img.shields.io/drone/build/4IS-Cronicle/Plugin-Tools/main?server=https%3A%2F%2Fdrone.4lch4.io&style=flat-square
[1]: https://drone.4lch4.io/4IS-Cronicle/Plugin-Tools
[2]: https://flat.badgen.net/npm/license/@4is-cronicle/plugin-tools
[3]: https://npmjs.com/package/@4is-cronicle/plugin-tools
[4]: https://flat.badgen.net/npm/v/@4is-cronicle/plugin-tools
[5]: https://npmjs.com/package/@4is-cronicle/plugin-tools
[6]: https://flat.badgen.net/npm/@4is-cronicle/plugin-tools
[7]: https://npmjs.com/package/@4is-cronicle/plugin-tools
[8]: https://img.shields.io/snyk/vulnerabilities/npm/@4is-cronicle/plugin-tools?style=flat-square
[9]: https://app.snyk.io/org/alcha/project/b6b04336-9e6f-4207-bbd1-7b95e11232ff
[10]: https://flat.badgen.net/badge/code%20style/prettier/ff69b4
[11]: https://github.com/prettier/prettier
[12]: https://flat.badgen.net/discord/online-members/W72x4Ks
[13]: https://discord.gg/W72x4Ks
[14]: https://flat.badgen.net/twitter/follow/4lch4
[15]: https://twitter.com/4lch4
[16]: https://github.com/jhuckaby/Cronicle#plugins
[17]: https://npmjs.com/package/@4is-cronicle/plugin-tools
[18]: https://npmjs.com/package/@4lch4/logger
[19]: ./src/interfaces/IJobInput.ts
[20]: ./src/interfaces/IJobOutput.ts
[21]: ./src/utils/IOUtil.ts

<!-- [0]: https://github.com/jhuckaby/Cronicle#plugins
[1]: https://npmjs.com/package/@4is-cronicle/plugin-tools
[2]: https://npmjs.com/package/@4lch4/logger -->
