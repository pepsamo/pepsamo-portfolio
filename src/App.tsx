import React, { lazy, Suspense } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IAppProps, IStore } from './interfaces/general.interface';
import { ImageContainer, Layout } from './assets/styled-components/general';
import Header  from './components/header/Header';
import Main from './components/Main/Main';
import { connect } from 'react-redux';
// import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
// import Home from './pages/Home/Home';
// import Biography from './pages/Biography/Biography';

const mapStateToProps = (state: IStore, ownProps: any = {}) => {
  return {
    actualSection: state.section.actualSection
  }
}

const retrieveComponentToShow = (actualSection: string, Home, Biography, Contact) => {
  switch (actualSection) {
    case 'HOME':
    return Home;

    case 'BIOGRAFIA':
    return Biography;

    case 'CONTATTI':
    return Contact;

    default:
    return null;
  }
};
class App extends React.Component<IAppProps, {}> {
  render() {
    const { actualSection } = this.props;
    const Home = lazy(() => import('./pages/Home/Home'));
    const Biography = lazy(() => import('./pages/Biography/Biography'));
    const Contact = lazy(() => import('./pages/Contact/Contact'));
    
    return (
      <ImageContainer>
        <Layout>
          <Header />
          <Main>
              <Suspense fallback={ <h1> Loading... </h1> }>
              { retrieveComponentToShow(actualSection, <Home />, <Biography />, <Contact />) }
              </Suspense>
          </Main>
        </Layout>
      </ImageContainer>
    );
  }
}

export default connect(mapStateToProps)(App);
