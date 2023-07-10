import Dropdown from 'react-dropdown';

export type TDropdown = {
  label: React.ReactNode;
  value: string;
};

export type TFormDropdownProps = {
  label: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options: TDropdown[];
};

export const FormDropdown = ({
  label,
  placeholder,
  disabled = false,
  options,
  ...props
}: TFormDropdownProps) => {
  return (
    <div {...props}>
      <p className="mb-2 text-base font-bold text-charcoal-500">{label}</p>
      <div className="rounded-md bg-red">
        <Dropdown
          options={options}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
