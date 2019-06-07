# useWebShare

A custom react hook for triggering the native [web share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) dialog in [supported browsers](https://caniuse.com/#feat=web-share)

## Usage

```
npm install react-use-web-share
```

```javascript
const { loading, isSupported, share } = useWebShare();
```

