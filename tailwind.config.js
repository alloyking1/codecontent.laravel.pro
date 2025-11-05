import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },

            colors: {
                // CodeContent brand colors - simple & clean
                blue: {
                  light: '#2a5a85',  // 20% lighter
                  DEFAULT: '#1c3f60', // Main blue
                  dark: '#14324c',   // 20% darker
                },
                gray: {
                  light: '#e0e0e0',
                  DEFAULT: '#b4b4b4',
                  dark: '#888888',
                },

                white: '#ffffff',
                black: '#000000',
        
                // Semantic aliases for easy use
                primary: {
                  light: '#2a5a85',
                  DEFAULT: '#1c3f60',
                  dark: '#14324c',
                },
                neutral: {
                  light: '#e0e0e0',
                  DEFAULT: '#b4b4b4',
                  dark: '#888888',
                },
                accent: {
                  light: '#ffffff',
                  DEFAULT: '#000000',
                  dark: '#000000',
                }
              },
        },
    },

    plugins: [forms],
};
