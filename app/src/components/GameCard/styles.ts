import { StyleSheet } from 'react-native'

import { THEME } from 'src/theme'

export default StyleSheet.create({
  box: {
    marginRight: 24,
  },
  cover: {
    width: 240,
    height: 230,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
  },
  footer: {
    width: '100%',
    height: 102,
    padding: 16,
    justifyContent: 'flex-end',
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
})
