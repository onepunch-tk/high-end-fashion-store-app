import { WithClassNameProps } from "../types/with-classname.props.ts";
import { tv } from "tailwind-variants";
import { cls } from "../utils/helpers.ts";

const price = tv({
  base: "text-neutral-300",
  variants: {
    color: {
      black: "text-neutral-900",
    },
  },
});

interface PriceProps extends WithClassNameProps {
  priceColor?: keyof typeof price.variants.color;
}

export function Price({ className, priceColor }: PriceProps) {
  return (
    <div className={className}>
      <span
        className={cls(
          price({ ...(priceColor && { color: priceColor }) }),
          "text-2xl"
        )}
      >
        € 3550
      </span>
      <span
        className={cls(
          price({ ...(priceColor && { color: priceColor }) }),
          "text-xs"
        )}
      >
        based on your 5 items
      </span>
    </div>
  );
}
