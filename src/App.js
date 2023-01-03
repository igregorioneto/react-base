import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(78);
  const [birthDate, setBirthDate] = useState("2022-01-02");

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
            labelDescription="Digite o seu nome"
            inputValue={name}
            onInputChange={handleChangeName}
          />
          <DateInput
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
