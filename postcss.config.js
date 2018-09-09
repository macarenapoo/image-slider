module.exports = {
  plugins: [
    require("autoprefixer")(),
    require("postcss-simple-vars")({
      variables: {
        $red: "#FF4545",
        $darkRed: "#E83131",
        $cream: "#E5E4DA",
        $darkCreak: "#C7C5B8",
        $darkGray: "#2D2D2D",
        $lightGray: "#383838"
      }
    })
  ]
};
