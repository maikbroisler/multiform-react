import { useHistory } from "react-router";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";

export const FormStep4 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleFinish = () => {
    alert('Revise os dados no console')
    console.log(state);
  }

  useEffect(() => {
    if (state.name === "" || state.email === "" || state.github === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/4 </p>
        <h1>Legal {state.name}, agora revise seus dados</h1>
        <p>
          Revise todos os dados, se necessário volte algumas etapas e altere.
        </p>

        <hr />

        <SelectOption
          title="Nome completo"
          description={state.name}
          icon="ℹ"
          selected
          onCLick={() => {}}
        />

        <SelectOption
          title="E-mail"
          description={state.email}
          icon="📧"
          selected
          onCLick={() => {}}
        />

        <SelectOption
          title="Github"
          description={state.github}
          icon="💻"
          selected
          onCLick={() => {}}
        />

        <SelectOption
          title={state.level === 0 ? "Sou iniciante" : "Sou programador"}
          description={
            state.level === 0
              ? "Comecei a programar ha menos de 2 anos"
              : "Ja programo ha mais de 2 anos ou mais"
          }
          icon={state.level === 0 ? "🥳" : "😎"}
          selected
          onCLick={() => {}}
        />

        <Link to="/step3" className="backButton">
          Voltar
        </Link>
        <button onClick={handleFinish}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
