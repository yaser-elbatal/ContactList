import { I18nManager, Platform, StyleSheet } from 'react-native';
import { moderateScale, scale } from './Scalling';

export const SharedStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#1B2B5D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },

  centred: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpace: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'

  },

  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  rows: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  textAlign: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  paddingHorizontal: {
    paddingHorizontal: moderateScale(10),
  },
  marginHorizontal: {
    marginHorizontal: moderateScale(20),
  },
  borderRadius: {
    borderRadius: moderateScale(8),
  },

  textSpaceIOS: {
    marginBottom: Platform.OS == 'ios' ? moderateScale(8) : 0,
  },
  hitSlop: {
    right: scale(10),
    left: scale(10),
    top: scale(10),
    bottom: scale(10),
  }
});

export const paddingHorizontal = moderateScale(20);
