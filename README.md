## TODO:

- Responsiveness

  - When less than around 680px, display a hamburger icon that instead opens a drawer upon clicking and shows the navbar there instead
  - Modal rename to backdrop; backdrop background should have the same gradient animation effect as body background
  - Resonsive for experiences, projects, project details
  - Revamp about page
  - Does display: none also remove the element? Cause I might be having the code executed twice for Navbar when it is in lower screen px mode
  - Maybe refactor more of the layout into a react component and use screenwidth hooks instead?

- Maybe change layout background to a slightly lighter shade of blue and green; currently cant really see unless screen is bright enough

- Non-dev related:
  - Place projects and experiences in DB
  - Host project images on some website and ensure it is in the DB
  - Do a guideline on images that should be uploaded
  - Do medium article for any important projects

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
