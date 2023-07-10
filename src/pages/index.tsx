import { useMemo, useState } from 'react';

import { useGetListBank } from '@/api/hooks';
import { BeneficiaryInput, BeneficiaryReview } from '@/components/beneficiary';
import type { TDropdown } from '@/components/core/FormInput/FormDropdown';
import { Main } from '@/templates/Main';

const currentOptions = [
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'vnd',
    label: 'VND',
  },
];
const Index = () => {
  const [visibleNextButton, setVsibleNextButton] = useState<boolean>(true);

  const listBank: any = useGetListBank();

  const onNext = () => {
    setVsibleNextButton(false);
  };

  const bankOptions: TDropdown[] = useMemo(() => {
    if (!listBank.isSuccess) return [];

    return listBank.data.data.map((e: any) => ({
      value: e.id,
      label: e.name,
    }));
  }, [listBank.isSuccess, listBank.isFetching]);

  return (
    <Main>
      <div
        data-aos="zoom-out"
        className="mt-10 flex h-screen items-start justify-center"
      >
        <div className="container mx-5 mb-5 flex flex-col gap-5 md:mx-auto">
          <BeneficiaryInput
            visibleNextButton={visibleNextButton}
            bankOptions={bankOptions}
            currentOptions={currentOptions}
            onNext={onNext}
          />
          {!visibleNextButton && <BeneficiaryReview data-aos="fade-up" />}

          {!visibleNextButton && (
            <div className="mx-auto mb-10 w-1/4">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-lg bg-red px-5 py-2 text-lg  text-white"
                onClick={onNext}
              >
                <p className="">CONFIRM</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Index;
