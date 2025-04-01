// app.config.js
export default {
    expo: {
      name: "MemoApp",
      slug: "MemoApp",
      scheme: "memo-app",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      newArchEnabled: true,
      splash: {
        image: "./assets/splash-icon.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      ios: {
        supportsTablet: true
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff"
        }
      },
      web: {
        favicon: "./assets/favicon.png"
      },
      plugins: [
        [
          "expo-router",
          {
            root: "./src/app" // ← ここを修正
          }
        ]
      ]
    }
  }
  