import { WithClassNameProps } from "../../types/with-classname.props.ts";

interface HeaderTitleProps extends WithClassNameProps {
  title: string;
}

export function HeaderTitle({ title, className }: HeaderTitleProps) {
  return <h2 className={className}>{title}</h2>;
}
