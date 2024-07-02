import React from 'react';

const About = () => {
  return (
    <div className='bg-blue-200 flex justify-center items-center flex-col max-h-fit w-full p-2'>
      <div className="flex flex-row justify-between leading-8 w-full m-2">
        <div className='ml-5'>
          <h3>Discover More</h3>
          <ul>
            <li>What We Offer</li>
            <li>Leadership</li>
            <li>Careers</li>
            <li>For Enterprise</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Have questions? </p>
          <p>Reach out to us at{' '}</p>
          <a href="mailto:saiharshithamandapalli@gmail.com">
            saiharshithamandapalli@gmail.com
          </a>
        </div>
        <div>
          <p>partners</p>
          <p>Beta Testers</p>
          <p>Partners</p>
          <p>Translators</p>
        </div>
        <div className='mr-5'>
          <h3>Community</h3>
          <p>Blog</p>
          <p>Learners</p>
          <p>Teaching Center</p>
        </div>
      </div>
      <div>
        <p className='w-full border border-white m-2'></p>
        <p>&copy; 2023 Aura. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
