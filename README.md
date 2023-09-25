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
  - Remove the white colour card and just make nav bar sticky. Also, can just do the scrolling on the normal scroll bar
  - Revamp about page
  - Can refactor API to get experiences and project in 1 go

- Non-dev related:
  - Place projects and experiences in DB
  - Host project images on some website and ensure it is in the DB
  - Do a guideline on images that should be uploaded
  - Do medium article for any important projects

## inspiraations:

- https://dunks1980.com/
- https://brittanychiang.com/#about

## .env

create a .env file in root with this:

```Javascript
REACT_APP_DB_URL=mongodb+srv://USERNAMEHERE:PASSWORDHERE@DBNAME.mongodb.net/COLLECTIONNAME?retryWrites=true&w=majority
URL=http://localhost:3000
```

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
