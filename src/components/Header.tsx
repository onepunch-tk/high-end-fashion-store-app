import { HeaderBtn } from "./(header)/HeaderBtn.tsx";
import { HeaderTitle } from "./(header)/HeaderTitle.tsx";
import {
  faCartShopping,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { WithClassNameProps } from "../types/with-classname.props.ts";

interface HeaderProps extends WithClassNameProps {}
export function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <HeaderBtn icon={faChevronLeft} />
      <HeaderTitle className="uppercase" title="My Cart" />
      <HeaderBtn icon={faCartShopping} />
    </header>
  );
}
