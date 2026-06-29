import { Registry } from "../registry/Registry";

export class PlatformCore {
  public readonly registry = new Registry();

  private readonly version = "0.1.0-alpha.1";

  public start(): void {
    console.info(
      `🚀 Lovelace UV Platform ${this.version} started`
    );
  }
}