import './App.css';
import Banner from './componentes/Banner';
import Nav from './componentes/Nav';
import Row from './componentes/Row';
import request from './request';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Solo en Netflix"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row title="Tendencias" fetchUrl={request.fetchComedyMovies} />
      <Row title="Mas populares" fetchUrl={request.fetchTopRated} />
      <Row title="Accion" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
