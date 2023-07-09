import { FiArrowRight } from 'react-icons/fi';

import { FormLabel } from '@/components';
import { FormTextArea } from '@/components/FormInput/FormTextArea';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main>
      <div className="my-10 flex h-screen w-screen items-start justify-center md:items-center ">
        <div className="container mx-auto rounded-lg bg-cardTheme p-10 ">
          <h1 className="mb-5 text-left text-4xl font-bold text-white md:text-center">
            Fast Transfer
          </h1>
          <div className="mb-5 flex flex-col items-center  justify-between gap-5 md:flex-row">
            <div className="w-full rounded-lg bg-white px-4 py-5 md:w-1/2">
              <h1 className="mb-5 text-xl font-bold">
                Beneficiary information
              </h1>
              <div className="mb-5">
                <FormLabel label="Bank" className="mb-1" />
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
                <FormLabel label="Unit" className="w-2/6" />
              </div>
              <FormTextArea label="Description" className="mb-5" rows={6} />
            </div>
          </div>
          <div className="mx-auto w-1/4 ">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg bg-red px-5 py-2 text-lg font-bold text-white"
            >
              <p className="mr-2">Next</p>
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
