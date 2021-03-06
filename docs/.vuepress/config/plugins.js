module.exports = [
	[
		"@mr-hope/vuepress-plugin-sitemap",
		{
			hostname: "https://samsungdiscord.github.io",
		},
	],
	[
		"@vuepress/last-updated",
		{
			transformer: (timestamp, lang) => {
				const moment = require("moment");
				moment.locale(lang);
				return moment(timestamp).fromNow();
			},
		},
	],
	[
		"vuepress-plugin-robots",
		{
			host: "https://samsungdiscord.github.io",
			allowAll: true,
			sitemap: "/sitemap.xml",
		},
	],
	["@vuepress/back-to-top"],
	[
		"@vuepress/plugin-google-analytics",
		{
			id: "G-48TEMX0TB2",
		},
	],
	["vuepress-plugin-dehydrate"],
	[
		"@vuepress/active-header-links",
		{
			sidebarLinkSelector: ".sidebar-link",
			headerAnchorSelector: ".header-anchor",
		},
	],
	[
		"vuepress-plugin-clean-urls",
		{
			normalSuffix: "/",
		},
	],
	["vuepress-plugin-element-ui"],
	[
		"vuepress-plugin-container",
		{
			type: "c-tip",
			before: (info) => `<div class="custom-block c-tip"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "c-warning",
			before: (info) => `<div class="custom-block c-warning"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "c-danger",
			before: (info) => `<div class="custom-block c-danger"><h4 class="c-title">${info}</h4>`,
			after: "</div>",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "expander",
			before: (info) => `<details class="expander"><summary class="expansion">${info}</summary>`,
			after: "</details>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "guide",
			before: (info) => `<div class="guide"><p class="title">${info}</p>`,
			after: "</div>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "videolink",
			before: "<div class='videolink'>",
			after: "</div>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "guide-empty",
			before: "<div class='guide g-empty'>",
			after: "</div>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "note",
			before: "<div class='note'><p>",
			after: "</div></p>",
		},
	],
];