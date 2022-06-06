const projects = [
  {
    title: 'ScarabIO Bug Tracker',
    img: './images/bug-tracker-app.png',
    intro:
      'MERN stack project, JWT auth services via cookies, enables roles and permissions. Makes use of libraries like Cloudinary and fusion charts. Ticket functionality enables user interaction',
    short_description: 'React/MERN Project',
    description:
      'Front-end created in React, with react router v6, API with Node/Express connected to MongoDB Hosted in Atlas. Implementes auth services via HTTP only cookies with access and refresh tokens. Users have roles and based on that back-end and front-end give permissions for data retrieval and operations. Tickets can be submitted and a user can comment on each one. Leaders and admin can assign tickets and users to a team. Charts are created with fusion charts library. Makes use of Cloudinary for image upload in user update and  ticket creation.',
    sources: {
      Website: 'https://scarabio.netlify.app',
      'Front-end Repo': 'https://github.com/waltergpc/Bug-trakcer-app',
      'Back-end Repo': 'https://github.com/waltergpc/E-commerce-course-API',
    },
  },
  {
    title: 'Bike Terrain Shop',
    img: './images/Bike-shop-app.png',
    intro:
      'Developed in React, API in Node/Express, Auth0 authentication with email and social services like Gmail, Stripe Payment functionality, filtering products functionality.',
    short_description: 'React/MERN Project',
    description:
      'MERN app where a fictional bike store is showcased. This app was developed with React and react router v6, also it implements some netlify serverless functions in order to set payments with stripe. Authentication services are implemented through Auth0. Product list and filtering is made throughout context APIs. API was developed with Node and express, where a simple API was implemented to supply the stock and specs for each bike, cart functionality cannot exceed the numbers of the stock supplied by the API.',
    sources: {
      Website: 'https://bike-terrain-shop.netlify.app',
      'Front-end Repo': 'https://github.com/waltergpc/BIke-shop-app',
      'Back-end Repo': 'https://github.com/waltergpc/BIKE-API',
    },
  },
  {
    title: 'Inventory App',
    img: './images/inventory-app.png',
    intro:
      'Developed in React, API in Node/Express, implements JWT authentication services and product fetching by category. Makes use of reusable code for almost all views',
    short_description: 'React/MERN Project',
    description:
      'This MERN app was created using React and react router v6, it sets an inventory for an office environment and list them as general and personal supplies. the front-end was developed using React context API for state management. The API was developed with express where authentication with JWT is implemented and then routes are provided for the app to get the items for each user, it is lnked to a Mongo database where the users and items are stored.',
    sources: {
      Website: 'https://silver-inventory.netlify.app',
      'Front-end Repo': 'https://github.com/waltergpc/office-inventory-app',
      'Back-end Repo': 'https://github.com/waltergpc/Inventory_API',
    },
  },
  {
    title: 'Cryptocurrency tracker',
    img: './images/crypto-tracker-app.png',
    intro:
      "React app with Coingecko's API, implements filtering functions, pagination with HTTP calls, dynamic data components and d3 charts.",
    short_description: 'React Project',
    description:
      'This React App is a cryptocurrency tracker where a central component is mounted with price and market data for each project, in the central component pagination is introduced to show up to 100 projects per page and a max of 400 projects. The single coin component showcases components where data is acheived via visual communication, like color for % changes, tooltips for information and a d3-onlñy chart for a 3 month price follow-up.',
    sources: {
      Website: 'https://silver-tracker.netlify.app',
      'Front-end Repo': 'https://github.com/DPLATA/crypto_tracker',
    },
  },
  {
    title: 'Rick And Morty App',
    img: './images/rick-and-morty.png',
    intro:
      "React app with Rick and Morty's API, check out your favorite characters, locations and episodes, search and filter based on diferent parameters, Also see individual details.",
    short_description: 'React Project',
    description:
      'This React App implements a front-end app for rick and morty public API, It implements routes through V6 and styling through styled components. The app intends to make use of greatly reusable components for all views making them as generic as possible. Implements basic testing through React testing library.',
    sources: {
      Website: 'https://getschwiftyapp.netlify.app',
      'Front-end Repo': 'https://github.com/waltergpc/Rick_and_Morty_app',
    },
  },
]

const container = document.querySelector('#projects-container')

console.log(projects)

projects.forEach((project) => {
  const { title, img, intro, short_description, description, sources } = project
  let newProject = document.createElement('article')
  newProject.classList.add('project')
  newProject.innerHTML = `
  <img src=${img} class='project-image' />
  <div class='project-info'>
  <h3 class='project-title'>${title}</h3>
  <h5 class='short-desc'>${short_description}</h5>
  <div class='intro'>${intro}</div>
  <button type='button' class='span-btn' id='description-button'>Full Description</button>
  <div class='description' id='full-description'>
      <p>${description}</p>
  </div>
</div>
<hr />`

  const projectSources = document.createElement('div')
  projectSources.classList.add('sources')
  for (const source in sources) {
    const sourceSpan = document.createElement('span')
    sourceSpan.classList.add('source-item')
    sourceSpan.innerHTML = `<a href=${sources[source]}>${source}</a></span>`
    projectSources.appendChild(sourceSpan)
  }

  newProject.appendChild(projectSources)

  container.appendChild(newProject)
})

const descButtons = document.querySelectorAll('#description-button')

descButtons.forEach((button) => {
  const fullDescription = button.nextElementSibling
  const container = button.parentNode.parentNode
  button.addEventListener('click', () => {
    fullDescription.classList.toggle('visible-desc')
    container.classList.toggle('extended')
  })
})
