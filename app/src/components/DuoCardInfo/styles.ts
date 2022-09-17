import { StyleSheet } from 'react-native'

import { THEME } from 'src/theme'

export default StyleSheet.create({
  box: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.CAPTION_300,
    marginBottom: 4,
  },
  value: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
})
