export type TBeneficiaryItemProps = {
  title: string;
  text: string;
  className?: string;
};

export const BeneficiaryItem = ({
  title,
  text,
  className,
  ...props
}: TBeneficiaryItemProps) => {
  return (
    <div className={`flex justify-between break-words ${className}`} {...props}>
      <p className="w-2/3 text-charcoal-600">{title}</p>
      <p className="w-1/3 text-right">{text}</p>
    </div>
  );
};
