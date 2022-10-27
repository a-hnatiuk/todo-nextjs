## Task:

Create a simple NextJS project that supports MUI and Typescript.

## Requirements:

- The app should contain three pages at routes `/`, `/todos`, and `/api/todos`
- The `api/todos` page should contain a GET handler that returns an object with a mock list of todos. Each todo should have an `_id` and `text` property.
- The home page (at route `/`) should contain a welcome message and a button to navigate to the todos page.
- The `/todos` page should GET data from the api at `api/todos` and display a list of Cards (https://mui.com/material-ui/react-card/) with the todo title visible.
- Clicking the Edit button on a card will display a textfield inside the card populated with the current todo text.
- Clicking a Save button will send a POST request to `api/todos/{todoID}` with the updated todo data.
- Do not worry about updating the todos in memory.

You can use this for inspiration:
https://mui.com/material-ui/getting-started/templates/Example todo object: {   _id: "testid1",   text: "Example Todo 1" }
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
