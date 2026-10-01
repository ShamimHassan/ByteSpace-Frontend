# ByteSpace

ByteSpace is a responsive course-discovery website for exploring creative and technology learning paths. The project was built from the ByteSpace design brief and includes a full landing page plus bonus sign-in and account-creation screens.

## Features

- Responsive landing page with hero, partner brands, category navigation, featured courses, creator information, and signup call to action
- Course search and category filtering
- Course cards with course details, ratings, pricing, and local imagery
- Login and signup page layouts
- Local visual assets served from `public/assets`

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- CSS Modules and global CSS
- `next/image` for image rendering and optimization
- Poppins via `next/font`
- ESLint

## Getting Started

### Requirements

- Node.js (compatible with the installed Next.js version)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Route | Description |
| --- | --- |
| `/` | Course discovery landing page |
| `/login` | Sign-in screen |
| `/signup` | Account-creation screen |

The login and signup forms are frontend UI only; authentication and account persistence are not connected to a backend.

## Project Structure

```text
src/app/
	layout.tsx          Root layout, metadata, and font setup
	page.tsx            Landing page
	page.module.css     Landing page styles
	globals.css         Global styles
	login/              Login route and styles
	signup/             Signup route and styles
public/assets/        Local images used by the pages
```

## Design Brief

The implementation follows the [ByteSpace Figma design](https://www.figma.com/design/7a1P10w19E5rNdJQw6xy0q/ByteSpace-New-Check-website--Copy-?node-id=1-1067&t=LjExmcIrZqJ2Sw9G-0).

## Deployment and Repository

- Live site: [https://bytespace-frontend-chi.vercel.app](https://bytespace-frontend-chi.vercel.app)
- GitHub repository: [ShamimHassan/ByteSpace-Frontend](https://github.com/ShamimHassan/ByteSpace-Frontend)
