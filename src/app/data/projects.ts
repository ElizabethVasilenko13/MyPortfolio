import { Projects } from '@shared/models/project.interface';

export const projects: Projects = {
  completedApps: [
    {
      id: 0,
      name: 'ETHNOWEAR shop',
      summary: 'React eCommerce App',
      responsibilities: [
        `Collaborated with a 3-person team to develop a web shop, facilitating users in choosing their
      preferred clothing items and proceeding to checkout.`,
        `Implemented an agile workflow, taking charge of team coordination and control.`,
        `Utilized CommerceTools platform to enhance the functionality and performance of the application.
      Successfully integrated features such as filtering/sorting, authentication, and product pages`,
      ],
      description: `It's a comprehensive online shopping portal that provides an interactive and seamless experience to users. Users can browse through a vast range of products, view detailed descriptions, add their favorite items to the basket 🛒, and proceed to checkout 💳.
      The application is powered by CommerceTools 🌐, a leading provider of commerce solutions for B2C and B2B enterprises.`,
      gitHubLink: 'https://github.com/ElizabethVasilenko13/ECommerce-App',
      pictures: [
        'assets/projects/ecommerce/1.jpg',
        'assets/projects/ecommerce/3.png',
        'assets/projects/ecommerce/4.png',
        'assets/projects/ecommerce/5.png',
        'assets/projects/ecommerce/6.png',
        'assets/projects/ecommerce/7.png',
      ],
      technologies: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Commercetools',
        'WebPack',
        'Matetial UI',
      ],
    },
    {
      id: 1,
      name: 'Connections Chat',
      summary: 'Angular Chat App',
      responsibilities: [
        `Developed a dynamic Angular chat application facilitating public group discussions and private
      one-on-one conversations`,
        `Implemented features like authentication, user page, public groups and users lists`,
        `Enabled the creation of groups or conversations with dedicated pages for viewing and sending
      messages.`,
      ],
      description: `Application represents the platform to allow users to communicate via public text messages. Before starting to use the service a guest must register and sign in. Application includes public groups, private conversarions, user profile page and much more.`,
      gitHubLink: 'https://github.com/ElizabethVasilenko13/AngularConnections-YouTube',
      deployLink: 'https://elizabethvasilenko13.github.io/AngularConnections-YouTube/',
      pictures: [
        'assets/projects/connections/1.png',
        'assets/projects/connections/2.png',
        'assets/projects/connections/3.png',
        'assets/projects/connections/4.png',
        'assets/projects/connections/5.png',
      ],
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'RxJs', 'NgRx', 'Angular Material'],
    },
    {
      id: 2,
      name: 'YouTube Client App',
      summary: 'Angular YouTube Client App',
      description: '',
      gitHubLink: 'https://github.com/ElizabethVasilenko13/youtube-client-app',
      deployLink: 'https://elizabethvasilenko13.github.io/youtube-client-app/auth',
      pictures: [
        'assets/projects/youtube-client/1.png',
        'assets/projects/youtube-client/2.png',
        'assets/projects/youtube-client/3.png',
        'assets/projects/youtube-client/4.png',
        'assets/projects/youtube-client/5.png',
        'assets/projects/youtube-client/6.png',
      ],
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'RxJs'],
    },
  ],
  games: [
    {
      id: 0,
      name: 'Minesweeper',
      summary: 'Classic JS Minesweeper',
      responsibilities: [
        `Developed Classic Minesweeper game.`,
        `Icluded fetures such as: sounds, timer, theme change, game difficulty settings, game score table`,
      ],
      description: `In the game, mines are scattered throughout a board, which is divided into cells. Cells have three states: unopened, opened and flagged. An unopened cell is blank and clickable, while an opened cell is exposed.  A player selects a cell to open it. If a player opens a mined cell, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally. layers can also flag a cell, visualized by a flag being put on the location, to denote that they believe a mine to be in that place.`,
      gitHubLink: '',
      deployLink: 'https://my-custom-minesweeper.netlify.app/',
      pictures: [
        'assets/projects/minesweeper/1.png',
        'assets/projects/minesweeper/2.png',
        'assets/projects/minesweeper/3.png',
        'assets/projects/minesweeper/4.png',
      ],
      technologies: ['JavaScript', 'HTML', 'SCSS', 'WebPack'],
    },
    {
      id: 1,
      name: 'CSS Selectors Game',
      summary: 'TS Game inspired by CSS Diner',
      description: `This is a simulator for learning CSS selectors. The simulator consists of several game levels. Each level includes a layout example and html code that corresponds to the current level. Some layout elements are highlighted using animation. The user's task is to write a CSS selector that matches all selected layout elements. The prototype of the simulator is the CSS Diner application.`,
      gitHubLink: 'https://github.com/ElizabethVasilenko13/css-selectors-game',
      deployLink: ' https://cssselectorsgame.netlify.app/',
      pictures: [
        'assets/projects/css-selectors-game/1.png',
        'assets/projects/css-selectors-game/2.png',
        'assets/projects/css-selectors-game/3.png',
      ],
      technologies: ['TypeScript', 'HTML', 'SCSS', 'WebPack'],
    },
  ],
  smallProjects: [
    {
      id: 0,
      name: 'Virtual Keyboard',
      summary: 'JS Virtual Keyboard',
      description: 'Custom Vanila JS Virtual Keyboar',
      gitHubLink: 'https://github.com/ElizabethVasilenko13/virtual-keyboard',
      deployLink: 'https://elizabethvasilenko13.github.io/virtual-keyboard/',
      pictures: [
        'assets/projects/virtual-keyboard/1.png',
        'assets/projects/virtual-keyboard/2.png',
      ],
      technologies: ['JavaScript', 'HTML', 'SCSS'],
    },
  ],
};
