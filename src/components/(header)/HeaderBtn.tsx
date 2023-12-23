import { WithClassNameProps } from "../../types/with-classname.props.ts";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderBtnProps extends WithClassNameProps {
  icon: IconDefinition;
}

export function HeaderBtn({ icon, className }: HeaderBtnProps) {
  return (
    <span className={className}>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
}
