export class PlatformCore {
  private static instance: PlatformCore;

  private constructor() {}

  public static getInstance(): PlatformCore {
    if (!PlatformCore.instance) {
      PlatformCore.instance = new PlatformCore();
    }

    return PlatformCore.instance;
  }

  public start(): void {
    console.info("🚀 Lovelace UV Platform started");
  }
}