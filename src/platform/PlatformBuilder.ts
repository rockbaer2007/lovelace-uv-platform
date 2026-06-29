import { Platform } from "./Platform";

export interface PlatformBuilder{
  plugins(...plugins:string[]):PlatformBuilder;
  providers(...providers:string[]):PlatformBuilder;
  layouts(...layouts:string[]):PlatformBuilder;
  themes(...themes:string[]):PlatformBuilder;
  build():Platform;
}
