export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Anton|Sen|Playfair+Display|Open+Sans|Satisfy&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css"
      }
    ],
    //font
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href:
    //       "https://fonts.googleapis.com/css?family=Anton|Sen|Playfair+Display|Open+Sans|Satisfy&display=swap"
    //   }
    // ],
    // //icons
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href: "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
    //   }
    // ],
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href:
    //       "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css"
    //   }
    // ],
    script: []
  },
  // adding css
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "vuesax/dist/vuesax.css",
    "~/css/style.css",
    "~/css/loading-animation.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuesax"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
