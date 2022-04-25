import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Info = ({ h1 }: { h1: string }) => (
  <p className="font-serif text-pink-900 tracking-wide font-semibold text-2xl">
    {h1}
  </p>
);

const Me = ({ text }: { text: string }) => (
  <p className="font-serif text-m text-grey-900">{text}</p>
);

const About = () => (
  <Main meta={<Meta title="About" description="Short text" />}>
    <Content>
      <Info h1={'O mnie'} />
      <img src="./ok.jpg" alt="Image of woman" />
      <Me
        text={
          'Żeby się czymś cieszyć, trzeba mieć na to czas, dlatego idea slow life i slow fashion jest mi bliska. Całe życie śpiewam, oglądam dużo filmów i marzę o kolejnych podróżach.'
        }
      />
    </Content>
  </Main>
);

export default About;
