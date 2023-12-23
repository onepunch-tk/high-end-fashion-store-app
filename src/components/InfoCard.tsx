import { InfoDate } from "./(info-card)/InfoDate.tsx";
import { WithClassNameProps } from "../types/with-classname.props.ts";
import { CircleLine } from "./(info-card)/CircleLine.tsx";

export function InfoCard({ className }: WithClassNameProps) {
  return (
    <section className={className}>
      <InfoDate date="01/02" title="Information" />
      <CircleLine
        isEmpty={true}
        className="flex justify-between items-center"
      />
    </section>
  );
}
