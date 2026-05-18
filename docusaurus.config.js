// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SIMPLE project documentation",
  favicon: "https://avatars.githubusercontent.com/u/137744200",

  // Set the production url of your site here
  url: "https://doc.project-simple.eu",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "project-SIMPLE", // Usually your GitHub org/user name.
  projectName: "simple.toolchain.documentation", // Usually your repo name.
  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn"
    }
  },
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: ["https://use.fontawesome.com/releases/v6.4.2/css/all.css"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "developer",
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/project-SIMPLE/documentation/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-goatcounter',
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "advanced",
        path: "docs-advanced",
        routeBasePath: "advanced",
        sidebarPath: require.resolve("./sidebars-advanced.js"),
        editUrl: "https://github.com/project-SIMPLE/documentation/tree/main/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "user",
        path: "docs-user",
        routeBasePath: "user",
        sidebarPath: require.resolve("./sidebars-user.js"),
        editUrl: "https://github.com/project-SIMPLE/documentation/tree/main/",
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "https://avatars.githubusercontent.com/u/137744200",
      navbar: {
        title: "SIMPLE documentation",
        logo: {
          alt: "SIMPLE Logo",
          src: "https://avatars.githubusercontent.com/u/137744200",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "developerSidebar",
            docsPluginId: "developer",
            position: "left",
            label: "Developer Guide",
          },
          {
            type: "docSidebar",
            sidebarId: "advancedSidebar",
            docsPluginId: "advanced",
            position: "left",
            label: "Advanced",
          },
          {
            type: "docSidebar",
            sidebarId: "userSidebar",
            docsPluginId: "user",
            position: "left",
            label: "Final User",
          },
          {
            href: "https://github.com/project-SIMPLE",
            html: '<i class="fab fa-github" style="font-size: 24px;"></i>',
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sponsor",
            items: [
              {
                html: `
                    <p>
                      This SIMPLE website was created and maintained with the financial support of the European Union. Its contents are the sole responsibility of SIMPLE and do not necessarily reflect the views of the European Union.
                    </p>
                  `,
              },
              {
                html: `
                    <img src="/img/EU_POS.png" />
                  `,
              },
            ],
          },
          {
            title: "Licence",
            items: [
              {
                html: `
                    <p>
                      Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
                    </p>
                  `,
              },
              {
                html: `
                    <p>A copy of the license is included <a href="https://github.com/project-SIMPLE/documentation/blob/main/LICENSE" style="display:initial">here</a>, in the repository of the wiki content.</p>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project SIMPLE, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["csharp", "java"],
        defaultLanguage: "gaml",

        theme: require("@gama-platform/prism-gaml/themes/light"),
        darkTheme: require("@gama-platform/prism-gaml/themes/dark"),
      },
      goatcounter: {
        code: 'doc-project-simple',
      },
    }),
  themes: [require.resolve("@easyops-cn/docusaurus-search-local"), '@docusaurus/theme-mermaid'],
};

module.exports = config;
