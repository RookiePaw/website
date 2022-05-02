const plugins_1 = require("./config/plugins");
const config_1 = require("vuepress/config");
module.exports = {
    plugins: plugins_1.pluginsConfig
};
module.exports = (0, config_1.defineConfig4CustomTheme)(function (ctx) { return ({
    theme: "vt",
    title: "Home",
    themeConfig: {
        enableDarkMode: true,
        repo: "https://github.com/SamsungDiscord/website",
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
            "/forms/": [
                {
                    title: "Introduction",
                    collapsable: false,
                    children: ["/forms/"],
                },
            ],
        },
    },
}); });
