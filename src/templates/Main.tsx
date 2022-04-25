import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0 bg-slate-50">
    {props.meta}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-violet-200">
        <div className="pt-16 pb-8">
          <div className="text-4xl text-gray-900 font-extrabold">
            {AppConfig.title}
          </div>
          <div className="text-2xl">{AppConfig.description}</div>
        </div>
        <div>
          <img src="./banner.jpg" alt="Decorative banner" />
          <br />
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a>Strona główna</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a>O mnie</a>
              </Link>
            </li>
          </Navbar>
        </div>
      </div>
      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
        <span role="img" aria-label="Love">
          &nbsp;♥
        </span>{' '}
      </div>
    </div>
  </div>
);

export { Main };
