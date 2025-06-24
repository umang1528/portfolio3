
import { Theme } from '../types';

export const THEMES: Theme[] = [
  {
    id: 'default-dark',
    name: 'Default Dark',
    colors: {
      bodyBg: 'rgb(15 23 42)', // slate-900
      textPrimary: 'rgb(241 245 249)', // slate-100
      textSecondary: 'rgb(148 163 184)', // slate-400
      accentPrimary: 'rgb(6 182 212)', // cyan-500
      accentSecondary: 'rgb(168 85 247)', // purple-500
      accentTertiary: 'rgb(236 72 153)', // pink-500
      cardBg: 'rgb(30 41 59)', // slate-800
      cardBgLight: 'rgba(51, 65, 85, 0.7)', // slate-800/70
      borderColor: 'rgba(51, 65, 85, 0.5)', // slate-700/50
      buttonPrimaryBgGradientFrom: 'rgb(6 182 212)', // cyan-500
      buttonPrimaryBgGradientTo: 'rgb(168 85 247)', // purple-600
      buttonPrimaryText: 'rgb(255 255 255)', // white
      buttonPrimaryHoverBgGradientFrom: 'rgb(20 184 166)', // teal-500
      buttonPrimaryHoverBgGradientTo: 'rgb(192 38 211)', // fuchsia-600
      selectionBg: 'rgb(6 182 212)',
      selectionText: 'rgb(15 23 42)',
      scrollbarTrack: 'rgb(30 41 59)', // slate-800
      scrollbarThumb: 'rgb(56 189 248)', // cyan-400 (adjusted from #38bdf8)
      scrollbarThumbHover: 'rgb(14 165 233)', // cyan-500 (adjusted from #0ea5e9)
      shadowColorPrimary: 'rgb(6 182 212)',
      shadowColorSecondary: 'rgb(168 85 247)',
      shadowColorTertiary: 'rgb(236 72 153)',
      navBg: 'rgba(15, 23, 42, 0.8)', // slate-900/80
      footerBg: 'rgba(30, 41, 59, 0.5)', // slate-800/50
      sectionTitleFrom: 'rgb(6 182 212)',
      sectionTitleTo: 'rgb(168 85 247)',
      sectionTitleUnderlineFrom: 'rgb(6 182 212)',
      sectionTitleUnderlineTo: 'rgb(168 85 247)',
      inputBg: 'rgb(51 65 85)', // slate-700
      inputBorder: 'rgb(71 85 105)', // slate-600
      inputFocusRing: 'rgb(6 182 212)',
      filterButtonActiveBgGradientFrom: 'rgb(6 182 212)',
      filterButtonActiveBgGradientTo: 'rgb(168 85 247)',
      filterButtonActiveText: 'rgb(255 255 255)',
      filterButtonBg: 'rgb(51 65 85)', // slate-700
      filterButtonText: 'rgb(203 213 225)', // slate-300
      filterButtonHoverBg: 'rgb(71 85 105)', // slate-600
      successMessageBg: 'rgba(16, 185, 129, 0.2)', // green-500/20
      successMessageText: 'rgb(52, 211, 153)', // green-300
      successMessageBorder: 'rgb(16, 185, 129)', // green-500
    },
  },
  {
    id: 'classic-light',
    name: 'Classic Light',
    colors: {
      bodyBg: 'rgb(255 255 255)', // white
      textPrimary: 'rgb(30 41 59)', // slate-800
      textSecondary: 'rgb(71 85 105)', // slate-600
      accentPrimary: 'rgb(8 145 178)', // cyan-600
      accentSecondary: 'rgb(124 58 237)', // purple-600 (adjusted from 147 51 234)
      accentTertiary: 'rgb(219 39 119)', // pink-600
      cardBg: 'rgb(241 245 249)', // slate-100
      cardBgLight: 'rgba(226, 232, 240, 0.7)', // slate-200/70
      borderColor: 'rgba(203, 213, 225, 0.7)', // slate-300/70
      buttonPrimaryBgGradientFrom: 'rgb(8 145 178)',
      buttonPrimaryBgGradientTo: 'rgb(124 58 237)',
      buttonPrimaryText: 'rgb(255 255 255)',
      buttonPrimaryHoverBgGradientFrom: 'rgb(6 182 212)',
      buttonPrimaryHoverBgGradientTo: 'rgb(107 33 168)', // purple-700
      selectionBg: 'rgb(8 145 178)',
      selectionText: 'rgb(255 255 255)',
      scrollbarTrack: 'rgb(226 232 240)', // slate-200
      scrollbarThumb: 'rgb(103 232 249)', // cyan-300
      scrollbarThumbHover: 'rgb(34 211 238)', // cyan-400
      shadowColorPrimary: 'rgb(8 145 178)',
      shadowColorSecondary: 'rgb(124 58 237)',
      shadowColorTertiary: 'rgb(219 39 119)',
      navBg: 'rgba(255, 255, 255, 0.8)',
      footerBg: 'rgba(241, 245, 249, 0.5)',
      sectionTitleFrom: 'rgb(8 145 178)',
      sectionTitleTo: 'rgb(124 58 237)',
      sectionTitleUnderlineFrom: 'rgb(8 145 178)',
      sectionTitleUnderlineTo: 'rgb(124 58 237)',
      inputBg: 'rgb(226 232 240)', // slate-200
      inputBorder: 'rgb(148 163 184)', // slate-400
      inputFocusRing: 'rgb(8 145 178)',
      filterButtonActiveBgGradientFrom: 'rgb(8 145 178)',
      filterButtonActiveBgGradientTo: 'rgb(124 58 237)',
      filterButtonActiveText: 'rgb(255 255 255)',
      filterButtonBg: 'rgb(203 213 225)', // slate-300
      filterButtonText: 'rgb(51 65 85)', // slate-700
      filterButtonHoverBg: 'rgb(148 163 184)', // slate-400
      successMessageBg: 'rgba(134, 239, 172, 0.3)', // green-300/30
      successMessageText: 'rgb(21, 128, 61)', // green-700
      successMessageBorder: 'rgb(34, 197, 94)', // green-500
    },
  },
  {
    id: 'midnight-black',
    name: 'Midnight Black',
    colors: {
      bodyBg: 'rgb(0 0 0)', // black
      textPrimary: 'rgb(229 231 235)', // gray-200
      textSecondary: 'rgb(156 163 175)', // gray-400
      accentPrimary: 'rgb(29 78 216)',  // blue-700
      accentSecondary: 'rgb(190 24 93)', // pink-700
      accentTertiary: 'rgb(250 204 21)', // yellow-400
      cardBg: 'rgb(17 24 39)', // gray-900
      cardBgLight: 'rgba(31, 41, 55, 0.7)', // gray-800/70
      borderColor: 'rgba(55, 65, 81, 0.5)', // gray-700/50
      buttonPrimaryBgGradientFrom: 'rgb(29 78 216)',
      buttonPrimaryBgGradientTo: 'rgb(190 24 93)',
      buttonPrimaryText: 'rgb(255 255 255)',
      buttonPrimaryHoverBgGradientFrom: 'rgb(30 64 175)', // blue-800
      buttonPrimaryHoverBgGradientTo: 'rgb(157 23 77)', // pink-800
      selectionBg: 'rgb(250 204 21)',
      selectionText: 'rgb(0 0 0)',
      scrollbarTrack: 'rgb(17 24 39)',
      scrollbarThumb: 'rgb(55 65 81)', // gray-700
      scrollbarThumbHover: 'rgb(75 85 99)', // gray-600
      shadowColorPrimary: 'rgb(29 78 216)',
      shadowColorSecondary: 'rgb(190 24 93)',
      shadowColorTertiary: 'rgb(250 204 21)',
      navBg: 'rgba(0, 0, 0, 0.8)',
      footerBg: 'rgba(17, 24, 39, 0.5)',
      sectionTitleFrom: 'rgb(29 78 216)',
      sectionTitleTo: 'rgb(190 24 93)',
      sectionTitleUnderlineFrom: 'rgb(29 78 216)',
      sectionTitleUnderlineTo: 'rgb(190 24 93)',
      inputBg: 'rgb(31 41 55)', // gray-800
      inputBorder: 'rgb(55 65 81)', // gray-700
      inputFocusRing: 'rgb(29 78 216)',
      filterButtonActiveBgGradientFrom: 'rgb(29 78 216)',
      filterButtonActiveBgGradientTo: 'rgb(190 24 93)',
      filterButtonActiveText: 'rgb(255 255 255)',
      filterButtonBg: 'rgb(55 65 81)', // gray-700
      filterButtonText: 'rgb(209 213 219)', // gray-300
      filterButtonHoverBg: 'rgb(75 85 99)', // gray-600
      successMessageBg: 'rgba(34, 197, 94, 0.2)', // green-500/20
      successMessageText: 'rgb(110, 231, 183)', // green-300
      successMessageBorder: 'rgb(34, 197, 94)', // green-500
    },
  },
  {
    id: 'forest-serenity',
    name: 'Forest Serenity',
    colors: {
      bodyBg: 'rgb(17 24 39)', // gray-900 (as base dark for forest)
      textPrimary: 'rgb(209 213 219)', // gray-300
      textSecondary: 'rgb(107 114 128)', // gray-500
      accentPrimary: 'rgb(52 211 153)', // green-400
      accentSecondary: 'rgb(163 230 53)', // lime-400
      accentTertiary: 'rgb(202 138 4)', // amber-600
      cardBg: 'rgb(31 41 55)', // gray-800
      cardBgLight: 'rgba(55, 65, 81, 0.7)', // gray-700/70
      borderColor: 'rgba(75, 85, 99, 0.5)', // gray-600/50
      buttonPrimaryBgGradientFrom: 'rgb(52 211 153)',
      buttonPrimaryBgGradientTo: 'rgb(163 230 53)',
      buttonPrimaryText: 'rgb(17 24 39)', // gray-900
      buttonPrimaryHoverBgGradientFrom: 'rgb(16 185 129)', // green-500
      buttonPrimaryHoverBgGradientTo: 'rgb(132 204 22)', // lime-500
      selectionBg: 'rgb(52 211 153)',
      selectionText: 'rgb(17 24 39)',
      scrollbarTrack: 'rgb(31 41 55)',
      scrollbarThumb: 'rgb(16 185 129)', // green-500
      scrollbarThumbHover: 'rgb(5 150 105)', // green-600
      shadowColorPrimary: 'rgb(52 211 153)',
      shadowColorSecondary: 'rgb(163 230 53)',
      shadowColorTertiary: 'rgb(202 138 4)',
      navBg: 'rgba(17, 24, 39, 0.8)',
      footerBg: 'rgba(31, 41, 55, 0.5)',
      sectionTitleFrom: 'rgb(52 211 153)',
      sectionTitleTo: 'rgb(163 230 53)',
      sectionTitleUnderlineFrom: 'rgb(52 211 153)',
      sectionTitleUnderlineTo: 'rgb(163 230 53)',
      inputBg: 'rgb(55 65 81)', // gray-700
      inputBorder: 'rgb(75 85 99)', // gray-600
      inputFocusRing: 'rgb(52 211 153)',
      filterButtonActiveBgGradientFrom: 'rgb(52 211 153)',
      filterButtonActiveBgGradientTo: 'rgb(163 230 53)',
      filterButtonActiveText: 'rgb(17 24 39)',
      filterButtonBg: 'rgb(75 85 99)', // gray-600
      filterButtonText: 'rgb(209 213 219)',
      filterButtonHoverBg: 'rgb(107 114 128)', // gray-500
      successMessageBg: 'rgba(74, 222, 128, 0.2)', // green-400/20
      successMessageText: 'rgb(134, 239, 172)', // green-300
      successMessageBorder: 'rgb(74, 222, 128)', // green-400
    },
  },
  {
    id: 'azure-sky',
    name: 'Azure Sky',
    colors: {
      bodyBg: 'rgb(240 249 255)', // sky-50
      textPrimary: 'rgb(30 58 138)', // blue-800
      textSecondary: 'rgb(67 56 202)', // indigo-700
      accentPrimary: 'rgb(59 130 246)', // blue-500
      accentSecondary: 'rgb(14 165 233)', // sky-500
      accentTertiary: 'rgb(239 68 68)', // red-500 (as contrast)
      cardBg: 'rgb(255 255 255)', // white
      cardBgLight: 'rgba(224, 242, 254, 0.7)', // sky-100/70
      borderColor: 'rgba(191, 219, 254, 0.7)', // blue-200/70
      buttonPrimaryBgGradientFrom: 'rgb(59 130 246)',
      buttonPrimaryBgGradientTo: 'rgb(14 165 233)',
      buttonPrimaryText: 'rgb(255 255 255)',
      buttonPrimaryHoverBgGradientFrom: 'rgb(37 99 235)', // blue-600
      buttonPrimaryHoverBgGradientTo: 'rgb(2 132 199)', // sky-600
      selectionBg: 'rgb(59 130 246)',
      selectionText: 'rgb(255 255 255)',
      scrollbarTrack: 'rgb(224 242 254)', // sky-100
      scrollbarThumb: 'rgb(125 211 252)', // sky-300
      scrollbarThumbHover: 'rgb(56 189 248)', // sky-400
      shadowColorPrimary: 'rgb(59 130 246)',
      shadowColorSecondary: 'rgb(14 165 233)',
      shadowColorTertiary: 'rgb(239 68 68)',
      navBg: 'rgba(240, 249, 255, 0.8)',
      footerBg: 'rgba(224, 242, 254, 0.5)',
      sectionTitleFrom: 'rgb(59 130 246)',
      sectionTitleTo: 'rgb(14 165 233)',
      sectionTitleUnderlineFrom: 'rgb(59 130 246)',
      sectionTitleUnderlineTo: 'rgb(14 165 233)',
      inputBg: 'rgb(224 242 254)', // sky-100
      inputBorder: 'rgb(191 219 254)', // blue-200
      inputFocusRing: 'rgb(59 130 246)',
      filterButtonActiveBgGradientFrom: 'rgb(59 130 246)',
      filterButtonActiveBgGradientTo: 'rgb(14 165 233)',
      filterButtonActiveText: 'rgb(255 255 255)',
      filterButtonBg: 'rgb(191 219 254)', // blue-200
      filterButtonText: 'rgb(30 64 175)', // blue-700
      filterButtonHoverBg: 'rgb(147 197 253)', // blue-300
      successMessageBg: 'rgba(96, 165, 250, 0.2)', // blue-400/20
      successMessageText: 'rgb(29, 78, 216)', // blue-700
      successMessageBorder: 'rgb(96, 165, 250)', // blue-400
    },
  },
];
