import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

// const Info = ({ text }) => (<p> {text}</p>)

// consta Info = ({ text, heading}: {heading: string; text: string}) => {
//   console.log ('Hello');
//   <div>
//     <h1 className='text-red-900'>{heading}</h1>
//     <p className='text-red-700'>{text}</p>
//   </div>
// }

const Info = ({ h1 }: { h1: string }) => (
  <p className="font-serif font-medium underline text-gray-700 tracking-wide">
    {h1}
  </p>
);

const Me = ({ text }: { text: string }) => (
  <p className="font-serif text-m text-pink-900">{text}</p>
);

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <Info h1={'O mnie'} />
      <img src="./src/pages/ok.jpg" />
      <Me
        text={
          'Żeby się czymś cieszyć, trzeba mieć na to czas, dlatego idea slow life i slow fashion jest mi bliska. Całe życie śpiewam, oglądam dużo filmów i marzę o kolejnych podróżach.'
        }
      />
    </Content>
  </Main>
);

export default About;
