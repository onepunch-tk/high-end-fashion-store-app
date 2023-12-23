import { WithClassNameProps } from "../../types/with-classname.props.ts";

interface InfoDateProps extends WithClassNameProps {
  date: string;
  title: string;
}

export function InfoDate({ date, title, className }: InfoDateProps) {
  return (
    <div className={className}>
      <span className="text-neutral-300">{date}</span>
      <h3 className="text-neutral-300 uppercase text-2xl font-semibold">
        {title}
      </h3>
    </div>
  );
}
