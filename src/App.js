import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const name = 'Teste';
  const age = 78;

  return (
    <>
      <Header>React Base</Header>

      <Main>
        <div className="container mx-auto p-4">
          <p>
            o seu nome é {name}, com {name.length} caracteres e possui {age} anos.
          </p>
        </div>
      </Main>
    </>
  );
}

export default App;
