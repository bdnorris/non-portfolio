module.exports = {
  title: "Brian Norris: Mini-portfolio",
  description: "Small portfolio of web design work.",
  themeConfig: {
    displayAllHeaders: false, // Default: false
    lastUpdated: "Last Updated", // string | boolean,
    // nav: [
    //   //   { text: 'Home', link: '/' },
    //   // { text: "Projects", link: "/projects/" }
    //   { text: 'Slack', link: 'https://msuwebdesign.slack.com/' },
    // ],
    sidebar: [
      "/",
      {
        title: "Projects",
        collapsable: true,
        children: [
          "projects/cocacola.md",
          "projects/meyerjohns.md",
          "projects/pension.md",
          "projects/repowered_ngv.md",
          "projects/springfield_underground.md",
          "projects/scott_loveland.md",
          "projects/highliner.md"
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'))
    }
  },
  base: "/"
  // async ready() {
  //   // ...
  // }
};  