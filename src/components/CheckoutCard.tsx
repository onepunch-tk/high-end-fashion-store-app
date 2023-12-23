import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { WithClassNameProps } from "../types/with-classname.props.ts";

interface CheckoutCardProps extends WithClassNameProps {
  title: string;
  subscription: string;
}

export function CheckoutCard({
  className,
  subscription,
  title,
}: CheckoutCardProps) {
  return (
    <div className={className}>
      <div>
        <h3 className="text-4xl font-bold italic max-w-[200px]">{title}</h3>
        <span className="text-xs">{subscription}</span>
      </div>
      <FontAwesomeIcon className="text-3xl" icon={faArrowRight} />
    </div>
  );
}
