## TODO:

- Maybe change layout background to a slightly lighter shade of blue and green; currently cant really see unless screen is bright enough [ok]
- Responsiveness

  - When less than around 680px, display a hamburger icon that instead opens a drawer upon clicking and shows the navbar there instead [ok]
  - Responsiveness for experiences, projects, project details [ok]
  - Modal rename to backdrop; backdrop background should have the same gradient animation effect as body background [ok]
  - Find a way to reverse the slide in for backdrop content upon closing [ok]
  - Refactor layout component [ok]
  - Does display: none also remove the element? Cause I might be having the code executed twice for Navbar when it is in lower screen px mode; Find a way to render content only when needed [ok]
  - When entering page for the first time, there is a pause before the left side navbar appears (for >680px) [ok]
  - Refactor components in src into a components folder[ok]
  - Maybe change to continuous scrolling app [ok]
  - Can refactor API to get experiences and project in 1 go [ok]
  - Add an archives section. Maybe pinned projects is top 3 priority. Rest is in archives [ok]
  - Furthmore, in the projects page itself, check if top left should be return to archives or return to project. Maybe, in the API, check if it is the top 3 highest priority (maybe do a sort?) and if it is not, add another property called "return" which will either be "archives" or "projects". Then change UI accordingly [ok]
  - Add tags for projects (e.g. React, Solidity, etc...) which will be below the project? [ok]
  - Change breaking point to 700px to hamburger menu [ok]
  - Revamp about page

- Non-dev related:
  - Place projects and experiences in DB
  - Host project images on some website and ensure it is in the DB
  - Do a guideline on images that should be uploaded
  - Do medium article for any important projects
  - Update expense tracker python code

## inspiraations:

- https://dunks1980.com/
- https://brittanychiang.com/#about

## .env

create a .env file in root with this:

```Javascript
REACT_APP_DB_URL=mongodb+srv://USERNAMEHERE:PASSWORDHERE@DBNAME.mongodb.net/COLLECTIONNAME?retryWrites=true&w=majority
URL=http://localhost:3000
```

## Guidelines:

- Images should be 1440x700 px; If want to screenshot, ensure to set screensize (e.g. in chrome) to 1440x700px
- If edit in Canva to add title: Fonts: Apricots, 170px, color: #F5DEB3

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
