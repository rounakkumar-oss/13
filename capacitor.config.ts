import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.geminisland.game",
  appName: "GeminIsland",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  android: {
    allowMixedContent: false,
    backgroundColor: "#75b6d8",
    webContentsDebuggingEnabled: false,
  },
};

export default config;
