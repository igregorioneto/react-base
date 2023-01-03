import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";

function App() {
  const [name, setName] = useState('Teste');
  const [age, setAge] = useState(78);
  const [birthDate, setBirthDate] = useState("2022-01-02");

  useEffect(() => {
    document.title = name;
  }, [name]);

  function handleChangeName(newName) {
    setName(newName);
  }

  function handleChangeBirthDate(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  return (
    <>
      <Header>React Base</Header>

      <Main>
          <TextInput 
            id={getNewId()}
            labelDescription="Digite o seu nome"
            inputValue={name}
            onInputChange={handleChangeName}
            autoFocus={true}
          />
          <DateInput
            id={getNewId()}
            labelDescription="Digite sua data de nascimento"
            inputValue={birthDate}
            onInputChange={handleChangeBirthDate}
          />
          <p>
            o seu nome é {name}, com {name.length} caracteres e possui {getAgeFrom(birthDate)} anos.
          </p>
      </Main>
    </>
  );
}

export default App;
