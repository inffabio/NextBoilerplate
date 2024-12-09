const config = {
  
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  docs:{
     autodocs: true
  },
  webpackFinal:  (config) => {
      config.resolve.modules.push(`${process.cwd()}/src`)
      return config
  }
}
export default config
