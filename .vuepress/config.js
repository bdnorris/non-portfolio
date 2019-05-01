module.exports = {
  title: "Web Design for Design Majors",
  description: "DES-340 Documentation Site",
  themeConfig: {
    displayAllHeaders: false, // Default: false
    lastUpdated: "Last Updated", // string | boolean,
    nav: [
      //   { text: 'Home', link: '/' },
      // { text: "Projects", link: "/projects/" }
      { text: 'Slack', link: 'https://msuwebdesign.slack.com/' },
    ],
    sidebar: [
      "/",
      {
        title: "Projects",
        collapsable: true,
        children: [
          "projects/project01A.md"
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    }
  },
  base: "/"
  // async ready() {
  //   // ...
  // }
};  