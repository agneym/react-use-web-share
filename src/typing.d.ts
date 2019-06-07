interface Document {
  pictureInPictureEnabled: boolean;
  pictureInPictureElement: boolean;
  exitPictureInPicture: () => Promise<void>;
}

interface HTMLVideoElement {
  disablePictureInPicture: boolean;
  requestPictureInPicture: () => Promise<void>;
}
