import { InfoDate } from "./(info-card)/InfoDate.tsx";
import { WithClassNameProps } from "../types/with-classname.props.ts";
import { CircleLine } from "./(info-card)/CircleLine.tsx";
import { Price } from "./Price.tsx";

interface InfoCardProps extends WithClassNameProps {
  isMyCart?: boolean;
}

export function InfoCard({ className, isMyCart = false }: InfoCardProps) {
  return (
    <section className={className}>
      {!isMyCart ? <InfoDate date="01/02" title="Information" /> : <div />}
      {isMyCart ? (
        <Price
          className="flex flex-col justify-between items-end"
          // priceColor="black"
        />
      ) : (
        <CircleLine
          isEmpty={true}
          className="flex justify-between items-center"
        />
      )}
    </section>
  );
}
