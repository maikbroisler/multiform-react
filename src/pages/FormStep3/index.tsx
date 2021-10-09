import { useHistory } from "react-router";
import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "" && state.name !== "") {
      history.push("/step4");
    } else {
      alert("Preencha os dados!");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/4 </p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            autoFocus
          />
        </label>

        <label>
          Qual seu Github??
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
            autoFocus
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Revisar Dados</button>
      </C.Container>
    </Theme>
  );
};
