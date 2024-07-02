import React from 'react';
import Style from '../components/style.jsx';

const Card = ({ no, title, content , mt}) => {

  return (
    <div className={`p-10 m-2 ${mt ? `md:mt-6 lg:mt-16` : ''} space-y-5 bg-[#44315d89] flex flex-col w-[242px] h-[400px] float-left rounded-xl`}>
      <div id="captionTitle" className='text-5xl bg-gradient-to-r from-[#2600fc] to-[#ff00ea] bg-clip-text text-transparent'>{no}</div>
      <div className={`text-start text-2xl text-clip ${Style.miniTitle}`}>{title}</div>
      <div className='text-start text-xl text-gray-400'>{content}</div>
    </div>
  );
};

const ChooseUs = () => {
  return (
    <div className='relative'>
      <div
        aria-hidden="true"
        className='absolute bottom-0 right-0 w-32 h-96 rounded-full bg-gradient-to-b from-violet-950 to-[#0F051D] blur-3xl scale-y-100 opacity-90'
      ></div>
      <div  id="subTitle" className={`${Style.subTitle} mt-16 mb-16 text-center`}>Why Choose us ?</div>
      <div className='flex flex-row flex-wrap lg:space-x-8 items-center justify-center'>
        <Card no="01." title="Huge Collection" content=" Extensive database with latest articles on all technologies." mt={false} />
        <Card no="02." title="High quality" content="Carefully curated, reliable sources ensuring accurate, up-to-date information." mt={true} />
        <Card no="03." title="Top resource" content="Comprehensive coverage of programming languages and emerging tech trends." mt={false}/>
        <Card no="04." title="Big Community" content="Engaged user base for sharing knowledge and gaining insights." mt={true} />
      </div>
    </div>
  );
};

export default ChooseUs;
