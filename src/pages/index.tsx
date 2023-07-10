import { useState } from 'react';

import { BeneficiaryInput, BeneficiaryReview } from '@/components/beneficiary';
import { Main } from '@/templates/Main';

const Index = () => {
  const [visibleNextButton, setVsibleNextButton] = useState<boolean>(true);

  const onNext = () => {
    setVsibleNextButton(false);
  };

  return (
    <Main>
      <div className="">
        <div className="my-10   flex h-screen items-start justify-center overflow-scroll   ">
          <div className="container mx-auto mb-5 flex flex-col gap-5">
            <BeneficiaryInput
              visibleNextButton={visibleNextButton}
              onNext={onNext}
            />
            {!visibleNextButton && <BeneficiaryReview />}

            {!visibleNextButton && (
              <div className="mx-auto  w-1/4">
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
      </div>
    </Main>
  );
};

export default Index;
