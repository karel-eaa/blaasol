## `main.jsx` — App Entry Point & Routing

This file is the **starting point of the app**. It launches everything and decides which page to show based on the URL in the browser.

***

## What It Does

- Loads the app into the webpage
- Uses `StrictMode` to help catch bugs during development
- Shows the right page depending on what URL the user visits

***

## Pages & Their URLs

| URL | Page Shown |
|---|---|
| `/` | Home |
| `/experience` | Experience |
| `/volunteer` | Volunteer |
| `/sponsors` | Sponsors |
| `/tickets` | Tickets |
| `/artists` | All Artists |
| `/artists/:name` | Single Artist page (changes based on the artist) |
| `/good-acts` | Good Acts |
| `/gallery` | Gallery |
| `/shop` | Shop |
| `/contact` | Contact |

***

## Notes

- All pages live in the `./views/` folder.
- `index.css` applies the global styles to the whole app.
