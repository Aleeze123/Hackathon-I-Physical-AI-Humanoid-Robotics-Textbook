// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Master Physical AI through comprehensive coverage of ROS 2, Gazebo/Isaac simulation, and Vision-Language-Action systems. Build intelligent humanoid robots progressing from digital twins to physical deployment. Engage in practical projects that culminate in creating autonomous, voice-controlled robotic systems.',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',

  // English and Urdu languages
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
      ur: {
        label: 'اردو',
        direction: 'rtl',
        htmlLang: 'ur',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Important for i18n
          routeBasePath: '/',
          path: 'docs',
        },
        blog: false, // Disable blog if not using
        theme: { 
          customCss: './src/css/custom.css' 
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { 
      respectPrefersColorScheme: true,
    },
    
    navbar: {
      title: 'Physical AI & Humanoid Robotics Textbook',
      logo: { 
        alt: 'My Site Logo', 
        src: 'img/logo.svg' 
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        // Language switcher removed here - just comment or delete this block
        /*
        {
          type: 'localeDropdown',
          position: 'right',
        },
        */
        {
          href: 'https://github.com/Aleeze123/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'light',
      links: [
        {
          title: 'Textbook',
          items: [
            { 
              label: 'Overview', 
              to: '/intro' 
            },
            { 
              label: 'Chapter 1: Humanoid Robotics', 
              to: '/chapter1' 
            },
            { 
              label: 'Chapter 2: ROS 2', 
              to: '/chapter2' 
            },
            { 
              label: 'Chapter 3: Digital Twins', 
              to: '/chapter3' 
            },
          ],
        },
        {
          title: 'Author',
          items: [
            { 
              label: 'Aleeza - GitHub', 
              href: 'https://github.com/Aleeze123' 
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook | Created by Aleeza`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;