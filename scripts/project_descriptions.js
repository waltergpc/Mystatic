const projects1 = [
  {
    title: 'ScarabIO Bug Tracker',
    intro:
      'MERN stack project, JWT auth services via cookies, enables roles and permissions. Makes use of libraries like Cloudinary and fusion charts. Ticket functionality enables user interaction',
    short_description: 'React/MERN Project',
    description:
      'Front-end created in React, with react router v6, API with Node/Express connected to MongoDB Hosted in Atlas. Implementes auth services via HTTP only cookies with access and refresh tokens. Users have roles and based on that back-end and front-end give permissions for data retrieval and operations. Tickets can be submitted and a user can comment on each one. Leaders and admin can assign tickets and users to a team. Charts are created with fusion charts library. Makes use of Cloudinary for image upload in user update and  ticket creation.',
    websiteURL: 'https://scarabio.netlify.app',
    front_repo: 'https://github.com/waltergpc/Bug-trakcer-app',
    back_repo: 'https://github.com/waltergpc/E-commerce-course-API',
  },
  {
    title: 'Bike Terrain Shop',
    intro:
      'Developed in React, API in Node/Express, Auth0 authentication with email and social services like Gmail, Stripe Payment functionality, filtering products functionality.',
    short_description: 'React/MERN Project',
    description:
      'MERN app where a fictional bike store is showcased. This app was developed with React and react router v6, also it implements some netlify serverless functions in order to set payments with stripe. Authentication services are implemented through Auth0. Product list and filtering is made throughout context APIs. API was developed with Node and express, where a simple API was implemented to supply the stock and specs for each bike, cart functionality cannot exceed the numbers of the stock supplied by the API.',
    websiteURL: 'https://bike-terrain-shop.netlify.app',
    front_repo: 'https://github.com/waltergpc/BIke-shop-app',
    back_repo: 'https://github.com/waltergpc/BIKE-API',
  },
  {
    title: 'Inventory App',
    intro:
      'Developed in React, API in Node/Express, implements JWT authentication services and product fetching by category. Makes use of reusable code for almost all views',
    short_description: 'React/MERN Project',
    description:
      'This MERN app was created using React and react router v6, it sets an inventory for an office environment and list them as general and personal supplies. the front-end was developed using React context API for state management. The API was developed with express where authentication with JWT is implemented and then routes are provided for the app to get the items for each user, it is lnked to a Mongo database where the users and items are stored.',
    websiteURL: 'https://silver-inventory.netlify.app',
    front_repo: 'https://github.com/waltergpc/office-inventory-app',
    back_repo: 'https://github.com/waltergpc/Inventory_API',
  },
  {
    title: 'Cryptocurrency tracker',
    intro:
      "React app with Coingecko's API, implements filtering functions, pagination with HTTP calls, dynamic data components and d3 charts.",
    short_description: 'React Project',
    description:
      'This React App is a cryptocurrency tracker where a central component is mounted with price and market data for each project, in the central component pagination is introduced to show up to 100 projects per page and a max of 400 projects. The single coin component showcases components where data is acheived via visual communication, like color for % changes, tooltips for information and a d3-onlñy chart for a 3 month price follow-up.',
    websiteURL: 'https://silver-tracker.netlify.app',
    front_repo: 'https://github.com/DPLATA/crypto_tracker',
    back_repo: '',
  },
]

module.exports = projects1
