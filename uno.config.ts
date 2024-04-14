import { defineConfig, presetWebFonts } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                roboto: [
                    { name: 'Roboto', weights: ['300', '400', '500', '600', '700', '800', '900'] }
                ]
            }
        })
    ],
})