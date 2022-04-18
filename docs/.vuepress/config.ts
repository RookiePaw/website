import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export = defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "Home",
  themeConfig: {
    enableDarkMode: true,
    repo: "https://github.com/ulivz/vuepress-theme-vt",
    // logo: "/logo.svg",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Forms", link: "/forms/" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Introduction",
          collapsable: false,
          children: ["/guide/", "/guide/getting-started"],
        },
        {
          title: "Guide",
          collapsable: false,
          children: [
            "/guide/firmware",
            "/guide/shizuku",
          ],
        },
      ],
      "/api/": [
        {
          title: "Config",
          path: "/api/",
          collapsable: false,
          children: [
            "/api/config-theme",
            "/api/config-frontmatter",
            "/api/config-home",
          ],
        },
      ],
    },
    codeSwitcher: {
      groups: {
        default: { ts: 'TypeScript', js: 'JavaScript' },
        'plugin-usage': { tuple: 'Tuple', object: 'Object' },
      }
    }
  },
}));
