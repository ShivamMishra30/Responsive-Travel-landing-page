module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
				brand: {
					primary: '#293895',
					primaryLight: '#4A6AFE',
          background: '#f3f3f1'
				},
        
			},
      boxShadow: {
        '3xl': '10px 13px 0px -2px rgba(74,106,254,0.99)'
      }
    },
    
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
