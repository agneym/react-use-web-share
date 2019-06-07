interface IShareConfig {
  title: string;
  text?: string;
  url: string;
}

interface Navigator {
  share: (config: IShareConfig) => Promise<void>;
}