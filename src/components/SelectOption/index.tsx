import * as SO from "./styles";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onCLick: () => void;
};

export const SelectOption = ({
  title,
  description,
  icon,
  selected,
  onCLick,
}: Props) => {
  return (
    <SO.Container selected={selected} onClick={onCLick}>
      <SO.Icon>{icon}</SO.Icon>
      <SO.Info>
        <SO.Title>{title}</SO.Title>
        <SO.Description>{description}</SO.Description>
      </SO.Info>
    </SO.Container>
  );
};
