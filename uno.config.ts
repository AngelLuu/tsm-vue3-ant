import { defineConfig, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    'screen': 'h-screen w-screen',
    'full': 'h-full w-full',
    'flex-center': 'flex justify-center items-center',
    'flex-between': 'flex justify-between items-center',
  },
  presets: [
    presetUno(),
    presetWebFonts({
      // provider: "bunny",
      // fonts: {
      //   Barlow: "Barlow Condensed:400,500,600,700",
      //   FiraSans: "Fira Sans:300,400,500,600,700",
      // },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
