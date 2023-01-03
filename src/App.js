import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";
import Timer from "./components/Timer";
import CheckBoxInput from "./components/CheckBoxInput";
import OnlineOffline from "./components/OnlineOffLine";

function App() {
  const [name, setName] = useState('Teste');
  const [age, setAge] = useState(78);
  const [birthDate, setBirthDate] = useState("2022-01-02");
  const [showTime, setShowTime] = useState(false);
  const [isOnlineOffline, setIsOnlineOffline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnlineOffline(true);
    }

    function toggleOffline() {
      setIsOnlineOffline(false);
    }

    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOnline);
    }
  }, []);

  function handleChangeName(newName) {
    setName(newName);
  }

  function handleChangeBirthDate(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleChange() {
    setShowTime(currentValue => !currentValue);
  }

  return (
    <>
      <Header>React Base</Header>

      <Main>
          {
            showTime && (
              <div className="text-right mt-1">
                <Timer />
              </div>
            )
          }

          <OnlineOffline isOnline={isOnlineOffline} />

          <CheckBoxInput 
            labelDescription="Mostrar cronômetro"
            onToggleChange={toggleChange}
          />

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
