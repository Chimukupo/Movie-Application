A dynamic cinema discovery platform powered by React.js, featuring Appwrite for data management and TailwindCSS for contemporary styling. The application connects to the TMDB database to deliver current movie information, enabling users to explore popular films, conduct detailed searches, and access comprehensive movie details through an adaptive, cross-device interface.

## <a name="tech-stack"> Tech Stack</a>

- **[React.js](https://react.dev/reference/react)** 

- **[React-use](https://github.com/streamich/react-use)**

- **[Appwrite](https://appwrite.io/)** 

- **[Tailwind CSS](https://tailwindcss.com/)**

- **[Vite](https://vite.dev/)** 

## <a name="features"> Features</a>

 **Browse All Movies**: Access an extensive collection of films from various genres and categories.

 **Search Movies**: Quickly locate specific films using intelligent search capabilities.

 **Trending Movies Functionality**: Showcases currently popular films through intelligent ranking systems and real-time popularity metrics.

 **Modern Interface**: A sleek and user-friendly interface designed for a great experience.

 **Responsiveness**: Optimized performance across desktop, tablet, and mobile devices.

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/Chimukupo/Movie-Application.git
cd movie-application

```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_TMDB_API_KEY=
VITE_APPWRITE_ENDPOINT =
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual **[TheMovieDatabase API](https://developer.themoviedb.org/reference/intro/getting-started)** and Appwrite credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

Thank you.