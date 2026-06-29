import { PlatformCore } from "../core/PlatformCore";

export function bootstrap(): void {
  const platform = new PlatformCore();

  platform.start();
}