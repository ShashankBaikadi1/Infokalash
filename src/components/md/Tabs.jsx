
import React, { useState } from 'react';
import image1 from '../../assets/undraw_photos/undraw_Data_trends_re_2cdy.png';
import image2 from '../../assets/images/card2.png';
import image3 from '../../assets/images/card3.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Industries');
  const [selectedItem, setSelectedItem] = useState({
    Industries: 0,
    Departments: 0,
    UseCases: 0,
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedItem((prevState) => ({ ...prevState, [tab]: 0 }));
  };

  const handleItemClick = (tab, index) => {
    setSelectedItem((prevState) => ({ ...prevState, [tab]: index }));
  };

  const tabs = [
    {
      id: 'Industries',
      label: 'Industries',
      items: [
        {
          title: 'Industry 1',
          description: 'Description for Industry 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image1,
          learnMoreLink: '/solutions/manufacturing-analytics',
        },
        {
          title: 'Industry 2',
          description: 'Description for Industry 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image1,
          learnMoreLink: '/solutions/manufacturing-analytics',
        },
        {
          title: 'Industry 3',
          description: 'Description for Industry 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image1,
          learnMoreLink: '/solutions/manufacturing-analytics',
        },
        {
          title: 'Industry 4',
          description: 'Description for Industry 4. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image1,
          learnMoreLink: '/solutions/manufacturing-analytics',
        },
      ],
    },
    {
      id: 'Departments',
      label: 'Departments',
      items: [
        {
          title: 'Department 1',
          description: 'Description for Department 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image2,
          learnMoreLink: '/solutions/life-sciences',
        },
        {
          title: 'Department 2',
          description: 'Description for Department 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image2,
          learnMoreLink: '/solutions/life-sciences',
        },
      ],
    },
    {
      id: 'UseCases',
      label: 'Use Cases',
      items: [
        {
          title: 'Use Case 1',
          description: 'Description for Use Case 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image3,
          learnMoreLink: '/solutions/financial-services',
        },
        {
          title: 'Use Case 2',
          description: 'Description for Use Case 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageSrc: image3,
          learnMoreLink: '/solutions/financial-services',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden bg-[#fbfcfd] p-4">
      <div className="max-w-7xl w-full mt-8 mb-10 text-center font-geist">
        <h2 className="mx-auto max-w-2xl text-2xl md:text-3xl lg:text-4xl font-bold">
          <span className="text-blue-700">Empower teams</span> across industries &amp; departments
        </h2>
      </div>
      <div className="w-full max-w-7xl">
        <div className="bg-white border rounded-md p-4">
          <nav className="border-b">
            <ul className="flex justify-around">
              {tabs.map((tab) => (
                <li key={tab.id} className={`flex-1 text-center border-b-4 ${activeTab === tab.id ? 'border-blue-500' : 'border-transparent'}`}>
                  <button
                    className={`py-2 text-lg font-semibold ${activeTab === tab.id ? 'text-blue-700' : 'text-gray-600'}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="pt-6 flex flex-col md:flex-row">
            {tabs.map((tab) => (
              <div key={tab.id} hidden={activeTab !== tab.id} className="flex flex-col md:flex-row md:space-x-4 w-full">
                <div className="md:w-1/2">
                  <div className="bg-cover bg-center h-64 md:h-auto rounded-md" style={{ backgroundImage: `url(${tab.items[selectedItem[tab.id]].imageSrc})` }}></div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div className="p-4">
                    <span className="uppercase text-blue-500 text-xs tracking-wider font-semibold block mb-2">{tab.label}</span>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">{tab.items[selectedItem[tab.id]].title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-6">{tab.items[selectedItem[tab.id]].description}</p>
                    <a href={tab.items[selectedItem[tab.id]].learnMoreLink} className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
                      Learn more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                  <div className="flex flex-wrap space-x-4 p-4 md:p-0 md:flex-col md:space-y-2">
                    {tab.items.map((item, index) => (
                      <button
                        key={index}
                        className={`py-1 text-left ${selectedItem[tab.id] === index ? 'font-bold text-blue-700' : 'text-gray-600'}`}
                        onClick={() => handleItemClick(tab.id, index)}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
