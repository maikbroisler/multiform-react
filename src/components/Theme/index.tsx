import * as T from "./styles";
import { ReactNode } from "react";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";

import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <T.Container>
      <T.Area>
        <Header />

        <T.Steps>
          <T.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nivel"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />

            <SidebarItem
              title="Detalhes"
              description="Revise seus dados"
              icon="details"
              path="/step4"
              active={state.currentStep === 4}
            />
          </T.Sidebar>
          <T.Page>{children}</T.Page>
        </T.Steps>
      </T.Area>
    </T.Container>
  );
};
