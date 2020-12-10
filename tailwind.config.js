module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      '8xl':'6.5rem',
      '9xl':'8rem',
     },
    
    extend: {
      zIndex: {
        '-back': '-10',
       },
      textColor: {
       
              'primary': '#44BBA4',
             'secondary': '#ffed4a',
             'danger': '#e3342f',
             'text':'#E5E7EB',
             'nw':'#777C7C'
           },
      colors:{
        
            'pr':'#2F7268',
         'logo-color':'#56a299',
         'new':'#00D9C0',
         'upda':'#44BBA4',
         
         },
         fontFamily:{
          display: ['Inter', 'system-ui', 'sans-serif'],
          body: ['Poppins', 'system-ui', 'sans-serif'],
        },
        
    },
  },
  variants: {},
  plugins: [],
}
