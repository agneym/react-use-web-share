# useWebShare

<a href="https://npmjs.com/package/react-use-web-share">
  <img src="https://badge.fury.io/js/react-use-web-share.svg" />
</a>
<a href="https://prettier.io">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>
<a href="https://travis-ci.org/BoyWithSilverWings/react-use-web-share">
  <img src="https://travis-ci.org/BoyWithSilverWings/react-use-web-share.svg?branch=master">
</a>

A custom react hook for triggering the native [web share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) dialog in [supported browsers](https://caniuse.com/#feat=web-share)

[Demo](https://boywithsilverwings.github.io/react-use-web-share)

## Usage

```
npm install react-use-web-share
```

```javascript
const { loading, isSupported, share } = useWebShare();

function onClick() {
  share();
}
```

See [example](https://github.com/BoyWithSilverWings/react-use-web-share/tree/master/example) directory for full example.

### Parameters

| Parameter |                      description                      | default  | required |
| :-------: | :---------------------------------------------------: | :------: | :------: |
| onSuccess |      called on successfully sharing the content       | () => {} |  false   |
|  onError  | called when caught error from navigator share content | () => {} |  false   |

### Returns

|    Name     |   Type   |                                         Description                                          |
| :---------: | :------: | :------------------------------------------------------------------------------------------: |
|   loading   | boolean  |                                        Loading state                                         |
| isSupported | boolean  | Detects whether the feature is supported in user's browser. Can be used to show the fallback |
|    share    | function |                       can be called to trigger the native share popup                        |

### `share`

This is the function that triggers the native share dialog in browser.

This takes an object as argument.

| Name  |     description      |                     default                     |
| :---: | :------------------: | :---------------------------------------------: |
| title | title of shared item |                `document.title`                 |
| text  | text of shared item  |
|  url  |   url to be shared   | canonical url if present, otherwise current url |

## Contributing

1. Install dependencies

```
npm install
```

2. Run dev for lib

```
npm run dev
```

3. Run demo

```
npm start
```
