import { BeneficiaryItem } from './component';

export type TBeneficiaryReviewProps = {};

// eslint-disable-next-line no-empty-pattern
export const BeneficiaryReview = ({}: TBeneficiaryReviewProps) => {
  return (
    <div className=" rounded-lg bg-cardTheme p-5 ">
      <div className=" flex flex-col   justify-between gap-5 ">
        <div className="w-full rounded-lg bg-white px-4 py-5">
          <h1 className="mb-3 text-xl font-bold">Beneficiary</h1>
          <hr className="mb-3" />
          <div className="w-full ">
            <BeneficiaryItem
              title="Beneficiary name"
              text="DINH QUE HONG"
              className="mb-2.5"
            />
            <BeneficiaryItem
              title="Bank"
              text="VIB - NH TMCP QUOC TE VIET NAM"
              className="mb-2.5"
            />
            <BeneficiaryItem
              title="Beneficiary account"
              text="DINH QUE HONG"
              className="mb-2.5"
            />
            <BeneficiaryItem
              title="Beneficiary account"
              text="00012345678910"
              className="mb-2.5"
            />
            <BeneficiaryItem
              title="Fee bearer"
              text="Remitter"
              className="mb-2.5"
            />
          </div>
        </div>

        <div className="w-full rounded-lg bg-white px-4 py-5">
          <h1 className="mb-3 text-xl font-bold">Amount</h1>
          <hr className="mb-3" />
          <div className="w-full ">
            <BeneficiaryItem
              title="Amount"
              text="10,000.00 €"
              className="mb-2.5"
            />
            <BeneficiaryItem
              title="Service fee"
              text="10,000.00 €"
              className="mb-2.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
