import { useHistory } from "react-router";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.name !== '') {
      history.push("/step2");  
    } else {
      alert('Preencha os dados!');
    }
    
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/4 </p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input type="text" value={state.name} onChange={handleNameChange} autoFocus />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
