import { WithClassNameProps } from "../types/with-classname.props.ts";

interface FooterProps extends WithClassNameProps {
  content: string;
}

export function Footer({ className, content }: FooterProps) {
  return <footer className={className}>{content}</footer>;
}
