# The Road to Next Course

***Live demo***: https://the-road-to-next-app-lilac.vercel.app

## Create Next App

### Installation

Video: 24

### Initial Project Structure

Video: 26

### Linting

Videos: 30 and 38

**Note**: A new Next.js project comes with eslint configured out of the box.

## Deploy to Vercel

Video: 28

## Project Structure

### Features Folder

Videos: 54 -> 58

**Note**: The `features` folder is for domain-specific code and the `components` folder is for reusable components across pages and features.

## Routing

### Pages

Video: 32

### Dynamic Routes

Video: 33

### Link Components

Video: 34

### Layouts

Video: 37

### Loading Route

Video: 69

**Note**: The loading route is like wrapping the whole page component in a `<Suspense>`, while `suspense` provides more fine-grained control over which parts of the page should be streamed.

### Tips and Tricks

- Path Constants: `<Link href={ticketsPath()}>` instead of `<Link href="/tickets"`>

  - Video: 36

## Server Components

### Server Components vs Client Components

Videos: 60 -> 63

**Note**:

- Components are server components by default.
- Client components are for hooks and interactions, i.e. click events.
- If a component is a client component, all of its children are rendered on the client.
  - Exception: A server component that is composed into a client component is rendered on the server.
- Client components are rendered on the server and rendered again on the client.

### Data Fetching

Video: 64 -> 66

### Streaming

Video: 67 and 68

**Note**: The loaded data should be wrapped in the `Suspense` component. That's why we extract a component where we fetch the data and wrap it in `Suspense`.
