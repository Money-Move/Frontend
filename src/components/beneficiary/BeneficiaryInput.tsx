import { FiArrowRight } from 'react-icons/fi';

import { FormLabel } from '@/components';
import { FormTextArea } from '@/components/core/FormInput/FormTextArea';

import type { TDropdown } from '../core/FormInput/FormDropdown';
import { FormDropdown } from '../core/FormInput/FormDropdown';

export type TBeneficiaryInputProps = {
  visibleNextButton: boolean;
  bankOptions: TDropdown[];
  currentOptions: TDropdown[];
  onNext: () => void;
};

export const BeneficiaryInput = ({
  visibleNextButton = true,
  bankOptions,
  currentOptions,
  onNext,
}: TBeneficiaryInputProps) => {
  return (
    <div className="rounded-lg bg-cardTheme p-5">
      <h1 className="mb-5 text-left text-4xl font-bold text-white md:text-center">
        Fast Transfer
      </h1>
      <div className="flex flex-col   justify-between gap-5 md:flex-row">
        <div className="w-full rounded-lg bg-white px-4 py-5 md:w-1/2">
          <h1 className="mb-5 text-xl font-bold">Beneficiary information</h1>
          <div className="mb-5">
            <FormDropdown
              label="Bank"
              className="mb-1"
              options={bankOptions}
              placeholder="Choose"
            />
            <p className=" text-right text-greenLight">
              Only Vietnam are is supported
            </p>
          </div>
          <FormLabel label="Beneficiary account" className="mb-5" />
          <FormLabel label="Beneficiary" className="mb-5" disabled />
        </div>
        <div className=" w-full rounded-lg bg-white px-4 py-5 md:w-1/2">
          <h1 className="mb-5 text-xl font-bold">Transfer information</h1>
          <div className="mb-5 flex gap-5">
            <FormLabel label="Amount" className="w-4/6" />
            <FormDropdown
              label="Unit"
              className="w-2/6"
              options={currentOptions}
              placeholder="Choose"
            />
          </div>
          <FormTextArea label="Description" className="" rows={6} />
        </div>
      </div>
      {visibleNextButton && (
        <div className="mx-auto mt-5 w-1/4">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-lg bg-red px-5 py-2 text-lg  text-white"
            onClick={onNext}
          >
            <p className="mr-2">NEXT</p>
            <FiArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
