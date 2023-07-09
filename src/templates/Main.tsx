import type { ReactNode } from 'react';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div
    style={{
      background: `linear-gradient(90deg, rgba(121,40,40,1) 17%, rgba(84,45,115,1) 57%, rgba(25,52,236,1) 82%)`,
    }}
    className="fixed"
  >
    <header />
    <div>{props.children}</div>
    <footer />
  </div>
);

export { Main };
