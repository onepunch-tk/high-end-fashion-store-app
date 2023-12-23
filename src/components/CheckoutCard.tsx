import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { WithClassNameProps } from "../types/with-classname.props.ts";
import { tv } from "tailwind-variants";

interface CheckoutCardProps extends WithClassNameProps {
  title: string;
  subscription: string;
  titleStyle?: keyof typeof content.variants.titleStyle;
}

const content = tv({
  variants: {
    titleStyle: {
      default: "max-w-[200px] text-4xl font-bold italic",
      smStyle: "text-xl uppercase",
    },
  },
});

export function CheckoutCard({
  className,
  subscription,
  title,
  titleStyle = "default",
}: CheckoutCardProps) {
  return (
    <div className={className}>
      <div>
        <h3 className={content({ titleStyle })}>{title}</h3>
        <span className="text-xs">{subscription}</span>
      </div>
      <FontAwesomeIcon className="text-3xl" icon={faArrowRight} />
    </div>
  );
}
