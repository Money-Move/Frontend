export type TFormLabelProps = {
  label: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export const FormLabel = ({
  label,
  placeholder,
  disabled = false,
  ...props
}: TFormLabelProps) => {
  return (
    <div {...props}>
      <p className="mb-2 text-base font-bold text-charcoal-500">{label}</p>
      <input
        placeholder={placeholder}
        className="w-full rounded-md border border-charcoal-300 px-3 py-2.5"
        disabled={disabled}
      />
    </div>
  );
};
