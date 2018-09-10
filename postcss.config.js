module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-simple-vars')({
      variables: {
        $red: '#f96e58',
        $yellow: '#fed95b',
        $darkGray: '#2D2D2D',
        $lightGray: '#383838'
      }
    })
  ]
};
