// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Eddy docs',
	tagline: 'Nesta página você verá a documentação do Eddy, como termo de uso e entre outros!',
	favicon: 'img/eddy.jpg',

	// Set the production url of your site here
	url: 'https://eddybot-docs.netlify.app',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Vinny7-7', // Usually your GitHub org/user name.
	projectName: 'docs-eddy', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'pt',
		locales: ['pt'],
	},

	presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//	editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: false,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
    ],
  ],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
		// Replace with your project's social card
		image: 'img/eddy.jpg',
		navbar: {
			title: 'Eddybot Docs',
			logo: {
				alt: 'Logo',
				src: 'img/eddy.jpg',
			},
			items: [
				{
					type: 'doc',
					docId: 'inicio',
					position: 'left',
					label: 'Documentação',
          },
				{
					href: 'https://eddybot.netlify.app',
					label: 'Site principal',
					position: 'right',
          },
				{
					href: 'https://eddybot.netlify.app/suporte',
					label: 'Servidor de suporte',
					position: 'right',
          },
				{
					href: 'https://eddybot.netlify.app/convite',
					label: 'Me adicione',
					position: 'right',
          },
        ],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Eddy bot',
					items: [
						{
							label: 'Site',
							href: 'https://eddybot.netlify.app/',
              },
            ],
          },
				{
					title: 'Comunidade',
					items: [

						{
							label: 'Discord',
							href: 'https://eddybot.netlify.app/suporte',
              },
						{
							label: 'Twitter',
							href: 'https://twitter.com/Eddybot_',
              },
            ],
          },
				{
					title: 'Outros',
					items: [

						{
							label: 'Me adicione',
							href: 'https://eddybot.netlify.app/convite',
              },
            ],
          },

        ],
			copyright: `Copyright © ${new Date().getFullYear()} Eddy bot`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	}),
};

module.exports = config;