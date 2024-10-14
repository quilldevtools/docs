import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Quill Documentation",
  tagline: "Simplify Mobile App Reviews",
  favicon: "img/favicon.ico",

  // Set the production URL of your site here
  url: "https://quill-docs.example.com", // Replace with your site URL
  // Serve the documentation at the root
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "quill", // Replace with your GitHub org/user name
  projectName: "quill-docs", // Replace with your repo name

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Set metadata like html lang
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        indexPages: true,
        docsRouteBasePath: "/",
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          sidebarCollapsible: false,
          // Edit links to point to your GitHub repository
          editUrl: "https://github.com/quilldevtools/docs/edit/main/",
          routeBasePath: "/", // Serve docs at the root
        },
        blog: false, // Disable the blog
        pages: false, // Disable extra pages
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: "book_a_demo",
      content:
        'Book a demo with us at <a target="_blank" rel="noopener noreferrer" href="https://getquill.dev">getquill.dev</a>',
      backgroundColor: "#000",
      textColor: "#fff",
      isCloseable: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Quill Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "Welcome to Quill", // First doc in your structure
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/quilldevtools/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/quilldevtools/docs/discussions",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/quilldevtools",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/quilldevtools/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quill Dev Tools • Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
