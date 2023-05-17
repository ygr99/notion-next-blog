const SITE_CONFIG = {
	siteName: "一个人丶99 Blog",
	siteLanguage: "zh-Hans",
	description: "一个人丶99 的个人博客，胡乱写些东西",
	avatarPath: "/hyoban.png",
	faviconPath: "/favicon.svg",
	links: [
		{
			type: "GitHub",
			url: "https://github.com/WangGuanJingJi",
		},
		{
			type: "Twitter",
			url: "https://twitter.com/ygr___99",
		},
		{
			type: "Email",
			url: "mailto:hi@hyoban.cc",
		},
	],
	codeTheme: {
		light: "github-light",
		dark: "github-dark",
	},
	siteUrl: "https://hyoban.cc",
	authorName: "ygr_99",
	authorLink: "https://hyoban.cc",
	authorEmail: "hi@hyoban.cc",
	timeZone: "Asia/Shanghai",
} as const

export default SITE_CONFIG
