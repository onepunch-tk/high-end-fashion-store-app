import { CheckoutCard } from "../components/CheckoutCard.tsx";
import { checkoutFakeData } from "../data/checkout-fake-data.ts";

export function Checkout() {
  return (
    <section className="flex-1 grid-rows-6 grid-flow-row max-h-[600px] overflow-y-auto bg-neutral-300">
      {checkoutFakeData.map((data, index) => (
        <CheckoutCard
          key={index}
          className="p-4 min-h-max border-b-2 border-neutral-900 flex justify-between items-center  even:bg-white"
          {...data}
        />
      ))}
    </section>
  );
}
