# react-twemoji
A simple [React](https://facebook.github.io/react/) wrapper for [Twemoji](https://github.com/twitter/twemoji).
It calls twemoji.parse() to convert emoji characters to Twemoji images.

## Install

```shell
yarn add react-twemoji
```

or, if you use npm,

```shell
npm install react-twemoji
```

## Usage

Simply use it to wrap your emotional content. Set `options` prop to pass options to `twemoji.parse`.

```jsx
import Twemoji from 'react-twemoji';

<Twemoji options={{ className: 'twemoji' }}>
  <p>😂<span>😉</span></p>
</Twemoji>
```

It outputs following HTML to DOM,

```html
<div>
  <p>
    <img draggable="false" class="twemoji" alt="😂" src="https://twemoji.maxcdn.com/2/72x72/1f602.png">
    <span>
      <img draggable="false" class="twemoji" alt="😉" src="https://twemoji.maxcdn.com/2/72x72/1f609.png">
    </span>
  </p>
</div>
```

### Props

| Name             | Type          | Default    | Description|
|:----             |:----          |:----       |:----|
| `options`        | `Object`      | `{}`       | `twemoji.parse` options |
| `noWrapper`      | `Boolean`     | `false`    | When it is `true`, `Twemoji` will not render a wrapping `div` to contain children. Note that since `twemoji.parse` needs an DOM element reference, any direct pure text child of `Twemoji` is not parsed when `noWrapper` is `true`. E.g. `foo` in `<Twemoji noWrapper={true}>foo<p>bar</p></Twmoji>` is not parsed. |

### Run example

```sh
yarn run example
```
then open http://localhost:8080/

## Development
### Lint

```sh
yarn run lint
```

### Test

```sh
yarn run test
```

### Build

```sh
yarn run build
```
