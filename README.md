# Test webback-dev-server issue

I ran into an issue trying to use the `config` package inside `webpack.config.js` and can't figure it out...

## Setup

1. `git clone ...`
2. `yarn` or `npm i`

## Test
1. `yarn start` or `npm start`
2. Observe:
  - Unsuccessful startup
  - Sane values loaded and printed to console
3. Edit `webpack.config.js` and uncomment line `x = ...`
4. Start again with `yarn start` or `npm start`
5. Observe:
  - Successful startup
  - `Before` and `After` values match... 