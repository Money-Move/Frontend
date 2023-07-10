import Image from 'next/image';
import type { ReactNode } from 'react';

import { IMAGE_PATH } from '@/utils/constant';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-screen">
    <header>
      <div className="m-5 flex justify-center md:justify-start">
        <Image
          src={`${IMAGE_PATH}/money-move.png`}
          alt=""
          className="h-24 w-24 object-cover"
          width={96}
          height={96}
        />
      </div>
    </header>
    <div>{props.children}</div>
    <footer />
  </div>
);

export { Main };
