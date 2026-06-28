import { PlatformCore } from "../core/PlatformCore";

export function bootstrap(): void {
  const platform = PlatformCore.getInstance();

  platform.start();
}