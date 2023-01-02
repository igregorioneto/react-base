function App() {
  const name = 'Teste';
  const age = 78;

  return (
    <>
      <header>
        <div className="bg-green-300 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">React Base</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <p>
            o seu nome é {name}, com {name.length} caracteres e possui {age} anos.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
