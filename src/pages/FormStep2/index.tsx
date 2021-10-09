import { useHistory } from "react-router";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";
import { Link } from "react-router-dom";

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step3");
    } else {
      alert("Preencha os dados!");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/4 </p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar ha menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onCLick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Ja programo ha mais de 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onCLick={() => setLevel(1)}
        />
        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
