## TODO:

- Error handling for API and calling the API to fetch data
  - Maybe refactor out calling apis into a utils
  - See if there is a way to just leave the connection to the database on (in the event that we want to revalidate instead of forcing cache only)
  - See if there is a way to re-use error handling for calling api data
- Loading / Error / Not found pages
- Responsiveness

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
