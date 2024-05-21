import React, { useState } from 'react';

const ValuesSection = () => {
  const [activeTab, setActiveTab] = useState('community-powered-item-6e213df3a5');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="community-powered" className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div id="slide1_controls" className="md:w-1/3">
          <ol role="tablist" className="space-y-4" aria-multiselectable="false">
            <li 
              role="tab"
              id="community-powered-item-6e213df3a5-tab"
              className={`cursor-pointer py-2 ${activeTab === 'community-powered-item-6e213df3a5' ? 'text-blue-600' : 'text-gray-600'}`}
              aria-controls="community-powered-item-6e213df3a5-tabpanel"
              tabIndex="0"
              onClick={() => handleTabClick('community-powered-item-6e213df3a5')}
              aria-selected={activeTab === 'community-powered-item-6e213df3a5'}
            >
              <h4 className="text-lg font-semibold">Community Powered</h4>
            </li>
            <li 
              role="tab"
              id="community-powered-item-b3119388c2-tab"
              className={`cursor-pointer py-2 ${activeTab === 'community-powered-item-b3119388c2' ? 'text-blue-600' : 'text-gray-600'}`}
              aria-controls="community-powered-item-b3119388c2-tabpanel"
              tabIndex="-1"
              onClick={() => handleTabClick('community-powered-item-b3119388c2')}
              aria-selected={activeTab === 'community-powered-item-b3119388c2'}
            >
              <h4 className="text-lg font-semibold">Freedom to Innovate</h4>
            </li>
            <li 
              role="tab"
              id="community-powered-item-ae8fab38f3-tab"
              className={`cursor-pointer py-2 ${activeTab === 'community-powered-item-ae8fab38f3' ? 'text-blue-600' : 'text-gray-600'}`}
              aria-controls="community-powered-item-ae8fab38f3-tabpanel"
              tabIndex="-1"
              onClick={() => handleTabClick('community-powered-item-ae8fab38f3')}
              aria-selected={activeTab === 'community-powered-item-ae8fab38f3'}
            >
              <h4 className="text-lg font-semibold">Customer Empathy</h4>
            </li>
            <li 
              role="tab"
              id="community-powered-item-7e2ac19e3e-tab"
              className={`cursor-pointer py-2 ${activeTab === 'community-powered-item-7e2ac19e3e' ? 'text-blue-600' : 'text-gray-600'}`}
              aria-controls="community-powered-item-7e2ac19e3e-tabpanel"
              tabIndex="-1"
              onClick={() => handleTabClick('community-powered-item-7e2ac19e3e')}
              aria-selected={activeTab === 'community-powered-item-7e2ac19e3e'}
            >
              <h4 className="text-lg font-semibold">Do Good</h4>
            </li>
          </ol>
        </div>
        <div id="slide1_container" className="md:w-2/3">
          <div id="slide1_images">
            <div id="community-powered-item-6e213df3a5-tabpanel" role="tabpanel" aria-labelledby="community-powered-item-6e213df3a5-tab" tabIndex="0" className={`${activeTab === 'community-powered-item-6e213df3a5' ? 'block' : 'hidden'}`}>
              <div className="bg-gray-200 p-4 rounded-md">
                <h3 className="text-2xl font-semibold">Community Powered</h3>
                <div className="flex flex-col md:flex-row mt-4">
                  <div className="md:w-1/3">
                    <img src="/path/to/community-powered-2x.png" className="hidden md:block" alt="Lightbulb" />
                    <img src="/path/to/community-powered-2x.png" className="block md:hidden" alt="Lightbulb" />
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <p>Our beginnings as a grassroots effort means we are a community powered organization - a community of open source contributors, business leaders, nonprofits and academics. We readily respond to development requests from both our open source and closed source communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="community-powered-item-b3119388c2-tabpanel" role="tabpanel" aria-labelledby="community-powered-item-b3119388c2-tab" tabIndex="0" className={`${activeTab === 'community-powered-item-b3119388c2' ? 'block' : 'hidden'}`}>
              <div className="bg-gray-200 p-4 rounded-md">
                <h3 className="text-2xl font-semibold">Freedom to Innovate</h3>
                <div className="flex flex-col md:flex-row mt-4">
                  <div className="md:w-1/3">
                    <img src="/path/to/do-good-copy-2x.png" className="hidden md:block" alt="Lightbulb" />
                    <img src="/path/to/do-good-copy-2x.png" className="block md:hidden" alt="Lightbulb" />
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <p>We believe in the freedom to innovate and challenge the status quo. Our technology solutions are designed to give our community the tools to innovate and create without restrictions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="community-powered-item-ae8fab38f3-tabpanel" role="tabpanel" aria-labelledby="community-powered-item-ae8fab38f3-tab" tabIndex="0" className={`${activeTab === 'community-powered-item-ae8fab38f3' ? 'block' : 'hidden'}`}>
              <div className="bg-gray-200 p-4 rounded-md">
                <h3 className="text-2xl font-semibold">Customer Empathy</h3>
                <div className="flex flex-col md:flex-row mt-4">
                  <div className="md:w-1/3">
                    <img src="/path/to/do-good-copy-2x.png" className="hidden md:block" alt="Lightbulb" />
                    <img src="/path/to/do-good-copy-2x.png" className="block md:hidden" alt="Lightbulb" />
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <p>Our approach is centered around customer empathy. We strive to understand the needs and challenges of our customers to deliver solutions that make a real difference in their lives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="community-powered-item-7e2ac19e3e-tabpanel" role="tabpanel" aria-labelledby="community-powered-item-7e2ac19e3e-tab" tabIndex="0" className={`${activeTab === 'community-powered-item-7e2ac19e3e' ? 'block' : 'hidden'}`}>
              <div className="bg-gray-200 p-4 rounded-md">
                <h3 className="text-2xl font-semibold">Do Good</h3>
                <div className="flex flex-col md:flex-row mt-4">
                  <div className="md:w-1/3">
                    <img src="/path/to/do-good-copy-2x.png" className="hidden md:block" alt="Lightbulb" />
                    <img src="/path/to/do-good-copy-2x.png" className="block md:hidden" alt="Lightbulb" />
                  </div>
                  <div className="md:w-2/3 mt-4 md:mt-0">
                    <p>Doing good is at the heart of our mission. We aim to make a positive impact in the world through our work and initiatives, ensuring that we contribute to the greater good of society.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
