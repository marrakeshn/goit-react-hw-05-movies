import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';

const HomePage = lazy(() =>
  import('../pages/HomePage')
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

export default function App() {
  return (
  <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          {/* <Route>
            <NotFoundView />
          </Route> */}
        </Switch>
      </Suspense>
    </Container>
  );
}