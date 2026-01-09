import { createTheme, MantineColorsTuple } from '@mantine/core';

// Colorado-inspired deep blue (modern, slightly desaturated from flag blue)
const deepBlue: MantineColorsTuple = [
  '#e8f1ff',
  '#d1e0f7',
  '#a3c1eb',
  '#72a0e0',
  '#4a84d6',
  '#2f71d0',
  '#1f67ce', // [6] - primary shade (deeper, more modern than Colorado flag)
  '#1558b7',
  '#0d4da3',
  '#00408f',
];

// Warm red accent (Colorado flag inspired, slightly muted)
const warmRed: MantineColorsTuple = [
  '#ffe9e9',
  '#ffd1d1',
  '#faa1a1',
  '#f66d6d',
  '#f24141',
  '#f02525',
  '#f01414', // [6] - accent shade
  '#d60a0a',
  '#c00505',
  '#a90000',
];

// Golden yellow accent (Colorado sun inspired, slightly warmed)
const goldenYellow: MantineColorsTuple = [
  '#fff9e0',
  '#fff0ca',
  '#ffe099',
  '#ffcf64',
  '#ffc038',
  '#ffb71b',
  '#ffb309', // [6] - accent shade
  '#e39d00',
  '#ca8b00',
  '#af7700',
];

export const theme = createTheme({
  primaryColor: 'deepBlue',

  colors: {
    deepBlue,
    warmRed,
    goldenYellow,
    // Override dark mode color palette to use deep blue shades
    dark: [
      '#f5f5f5', // dark.0 - lightest text on dark bg (pure white for maximum contrast)
      '#f8f9fa', // dark.1
      '#e9ecef', // dark.2
      '#dee2e6', // dark.3
      '#ced4da', // dark.4
      '#adb5bd', // dark.5 - borders, dividers
      '#1A4771', // dark.6 - default dark background
      '#123A5F', // dark.7 - hover states
      '#0C2D4D', // dark.8 - darker elements
      '#00408f', // dark.9 - deepest blue (darkest backgrounds)
    ],
  },

  // Set default text colors for light and dark mode
  black: '#0d4da3', // Light mode text color (deep blue instead of black)
  white: '#f5f5f5', // Dark mode text color (pure white)

  // Slightly larger default radius for modern feel
  defaultRadius: 'md',

  // Professional font stack
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '2.5rem', lineHeight: '1.2' },
      h2: { fontSize: '2rem', lineHeight: '1.3' },
      h3: { fontSize: '1.5rem', lineHeight: '1.4' },
      h4: { fontSize: '1.25rem', lineHeight: '1.4' },
    },
  },

  // Spacing scale (slightly more generous than default)
  spacing: {
    xs: '0.625rem', // 10px
    sm: '0.875rem', // 14px
    md: '1.25rem', // 20px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
  },

  // Shadow customization for depth
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },

  // Component-specific customization
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 600,
          letterSpacing: '0.01em',
        },
      },
    },

    Card: {
      defaultProps: {
        radius: 'lg', // Slightly more rounded cards
        padding: 'lg',
      },
      styles: {
        root: {
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },

    Title: {
      styles: {
        root: {
          fontWeight: 700,
          letterSpacing: '-0.02em', // Tighter letter spacing for modern look
        },
      },
    },

    Text: {
      styles: {
        root: {
          lineHeight: 1.6, // More readable line height
        },
      },
    },

    ThemeIcon: {
      defaultProps: {
        radius: 'md',
      },
    },

    Badge: {
      defaultProps: {
        radius: 'sm',
      },
      styles: {
        root: {
          fontWeight: 600,
          textTransform: 'none', // Remove uppercase
        },
      },
    },

    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
  },

  // Custom breakpoints if needed
  breakpoints: {
    xs: '36em', // 576px
    sm: '48em', // 768px
    md: '62em', // 992px
    lg: '75em', // 1200px
    xl: '88em', // 1408px
  },
});
