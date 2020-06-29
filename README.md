# React Server-Side Rendering NEWS FEED

A simple news feed app using SSR with React & Redux on Client and Server sides.

## Development

- Clone the repo:

```bash
$ git clone  https://github.com/007shyamagarwal/react-ssr-news-feed.git
```

- Go to the project directory and install dependencies:

```bash
$ cd ssr && npm install
```

Launch the server:

```bash
$ npm start
```

Now, the application is running at [http://localhost:3000/page/:id](http://localhost:3000/page/:id).

🥳

## Tech Stack

React, Redux, Express and Jest(Testing)

## Deployment

Using heroku CICD setup and please access this url to access application [https://news-feed-ssr.herokuapp.com/page/1](https://news-feed-ssr.herokuapp.com/page/1).

## Approach

1. Fetch data from api using pageId from req, and render it on server using ReactDOMServer and generate HTML.
2. Respond client with html and client site bundle.
3. Hydration on client with server state which is sent on window object.
4. For persisting data local storage middleware is used for listening for changes and initialze state on client.
