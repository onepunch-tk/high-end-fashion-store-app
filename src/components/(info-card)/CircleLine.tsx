import { WithClassNameProps } from "../../types/with-classname.props.ts";
import { tv } from "tailwind-variants";
import { cls } from "../../utils/helpers.ts";

const circle = tv({
  base: "h-3 w-3 rounded-full ring-2 ring-neutral-300 ring-offset-2 ring-offset-neutral-900",
  variants: {
    bgColor: {
      full: "bg-neutral-300",
      empty: " bg-neutral-900",
    },
  },
});

interface CircleLineProps extends WithClassNameProps {
  isEmpty: boolean;
}

export function CircleLine({ className, isEmpty }: CircleLineProps) {
  return (
    <div className={className}>
      <div className={cls(circle({ bgColor: "full" }))} />
      <div
        className={cls("ml-1 h-0 w-[75px] border border-neutral-300", {
          "mr-1": !isEmpty,
        })}
      />
      <div className={cls(circle({ bgColor: isEmpty ? "empty" : "full" }))} />
    </div>
  );
}
