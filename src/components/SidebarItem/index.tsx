import { Link } from "react-router-dom";
import * as SI from "./styles";

import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as BookIcon } from "../../assets/book.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as DetailsIcon } from "../../assets/details.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  return (
    <SI.Container>
      <Link to={path}>
        <SI.Info>
          <SI.Title>{title}</SI.Title>
          <SI.Description>{description}</SI.Description>
        </SI.Info>
        <SI.IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}

          {icon === "book" && <BookIcon fill="white" width={24} height={24} />}

          {icon === "mail" && <MailIcon fill="white" width={24} height={24} />}

          {icon === "details" && (
            <DetailsIcon fill="white" width={24} height={24} />
          )}
        </SI.IconArea>
        <SI.Point active={active}></SI.Point>
      </Link>
    </SI.Container>
  );
};
