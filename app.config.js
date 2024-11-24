module.exports = {
  name: 'WorkOn',
  slug: 'workon',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'dark',
  icon: './assets/icon.png',
  packagerOpts: {
    port: 8000,
  },
  splash: {
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon-foreground.png',
      backgroundImage: './assets/adaptive-icon-background.png',
      backgroundColor: '#ffffff',
    },
    package: 'io.workon.development',
  },
  extra: {
    eas: {
      projectId: 'a89380d1-fc6c-4188-9a42-e32498c9ea88',
    },
  },
  ios: {
    bundleIdentifier: 'io.workon.development',
    entitlements: {
      'aps-environment': 'development',
    },
  },
  owner: 'lkurczab',
  updates: {
    url: 'https://u.expo.dev/a89380d1-fc6c-4188-9a42-e32498c9ea88',
  },
  plugins: ['expo-secure-store'],
};
