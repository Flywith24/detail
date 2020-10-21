module.exports = {
  title: "Android Detail",
  tagline: "重学安卓专栏的配套内容，帮助开发者理解 Android 中的细节",
  url: "https://Flywith24.github.io/",
  baseUrl: "/detail/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "flywith24", // Usually your GitHub org/user name.
  projectName: "detail", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "🌞",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/runlet.png",
    navbar: {
      hideOnScroll: false,
      title: "Android Detail",
      logo: {
        alt: "Runlet Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "导读",
          position: "left",
        },
        {
          label: "博客",
          href: "https://flywith24.gitee.io/", 
          position: "left"
        },
        {
          href: "https://kunminx.gitbook.io/relearn-android",
          position: "left",
          label: "重学安卓",
        },
        {
          href: "https://github.com/Flywith24/Android-Detail",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Android Detail",
          items: [
            {
              label: "xx",
              to: "docs/faq",
            },
            {
              label: "xx",
              to: "docs/policies/terms",
            },
            {
              label: "xx",
              to: "docs/policies/privacy",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "xx",
              to: "blog",
            },
            {
              label: "xx",
              to: "docs",
            },
            {
              label: "xx",
              href: "https://github.com/runletapp/runlet/releases",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/runletapp/runlet",
            },
            {
              label: "Gitter",
              href: "https://gitter.im/runletapp",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/runletapp",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flywith24. All rights reserved.`,
    },
    googleAnalytics: {
      trackingID: "UA-132764481-1",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: "09724729b4ec048fc1aa41a08cbcfa03",
      indexName: "runlet",
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Flywith24/detail/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Flywith24/detail/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
