# 4naly3er
This repository is a fork of https://github.com/Picodes/4naly3er.

The original repository doesn't contains unit test for the issues. So, we are adding source solidity file and test files to test the issues.

Additionally, gradually we will add more issues.


## Usage

```bash
# analyze contracts
yarn analyze <BASE_PATH> <SCOPE_FILE> <GITHUB_URL> 
# Example
yarn analyze contracts scope.example.txt

# test an issue
yarn test test/GAS/addressBalance.test.ts
# generate ast of a solidity file
yarn ast test/contracts/addressBalance.sol
```

- `BASE_PATH` is a relative path to the folder containing the smart contracts.
- `SCOPE_FILE` is an optional file containg a specific smart contracts scope (see [scope.example.txt](./scope.example.txt))
- `GITHUB_URL` is an optional url to generate links to github in the report
- For remappings, add `remappings.txt` to `BASE_PATH`.
- The output will be saved in a `report.md` file.



## Installation

You'll need [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/). Then clone the repo and run:

```bash
yarn
```

You're all set!

## Contributing

You're more than welcome to contribute! For help you can check [CONTRIBUTING.md](CONTRIBUTING.md)

 