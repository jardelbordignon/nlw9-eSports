export const THEME = {
  COLORS: {
    BACKGROUND_900: '#121214',
    BACKGROUND_800: '#18181B',

    TEXT: '#FFFFFF',

    CAPTION_500: '#71717A',
    CAPTION_400: '#A1A1AA',
    CAPTION_300: '#D4D4D8',

    SHAPE: '#2A2634',

    PRIMARY: '#8B5CF6',
    SUCCESS: '#34D399',
    ALERT: '#F87171',

    FOOTER: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)'],
    OVERLAY: 'rgba(0,0,0,0.6)',
  },

  FONT_FAMILY: {
    REGULAR: 'Inter-Regular',
    SEMI_BOLD: 'Inter-SemiBold',
    BOLD: 'Inter-Bold',
    BLACK: 'Inter-Black',
  },

  FONT_SIZE: {
    SM: 14,
    MD: 16,
    LG: 24,
  },
}

export type ThemeType = typeof THEME
export type ColorKeys = keyof Omit<ThemeType['COLORS'], 'FOOTER'>
