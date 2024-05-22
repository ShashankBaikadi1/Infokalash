// import React, { useState } from 'react';
// import image1 from '../../assets/images/card1.png';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// const IndustryTabs = () => {
//   const [activeTab, setActiveTab] = useState('Industries');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const tabs = [
//     {
//       id: 'Industries',
//       label: 'Industries',
//       description: 'Reduce supply chain disruptions, improve production quality and safety, and boost profitability with better insights into the manufacturing process.',
//       imageSrc: image1,
//       learnMoreLink: '/solutions/manufacturing-analytics',
//     },
//     {
//       id: 'lifesciences',
//       label: 'Departments',
//       description: 'Description for Life Sciences',
//       imageSrc: image2,
//       learnMoreLink: '/solutions/life-sciences',
//     },
//     {
//       id: 'financialservices',
//       label: 'Use Cases',
//       description: 'Description for Financial Services',
//       imageSrc: image3,
//       learnMoreLink: '/solutions/financial-services',
//     },
  
//   ];

//   return (
//     <div className="mx-auto max-w-7xl relative z-20 mt-10 ">
//       <h2 className="mx-auto max-w-xs md:max-w-md lg:max-w-lg text-center text-bold block text-2xl md:text-3xl lg:text-4xl mb-10 md:mb-14">
//         Empower teams across industries &amp; departments
//       </h2>
//       <div className="flex flex-col overflow-hidden">
//         <nav className="relative before:content-[&quot;&quot;] before:block before:h-1 before:w-full before:bg-gray-10 before:absolute before:-bottom-px before:left-0">
//           <ul className="flex w-full mx-auto max-w-4xl">
//             {tabs.map((tab) => (
//               <li
//                 key={tab.id}
//                 className={`w-full relative top-px text-center cursor-pointer hover:text-gray-600 border-b-4 font-heading flex justify-between items-center md:text-lg transition-all flex-1 ${
//                   activeTab === tab.id ? 'bg-blue-100 text-gray-600 border-b-blue-500' : 'bg-transparent text-gray-200 border-b-gray-10'
//                 }`}
//               >
//                 <button
//                   className="block w-full text-center mx-auto py-3.5 px-1.5 md:px-3.5 focus focus-visible:-outline-offset-4 focus-visible:outline-black"
//                   onClick={() => handleTabClick(tab.id)}
//                 >
//                   {tab.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <main className="pt-3.5 md:pt-7 lg:pt-14">
//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               className="focus focus-visible:outline-black focus-visible:-outline-offset-2"
//               id={`tab-panel-${tab.id}`}
//               role="tabpanel"
//               aria-labelledby={`tab-${tab.id}`}
//               hidden={activeTab !== tab.id}
//             >
//               <div className='flex'>
//               <div className="rounded-l-3xl border border-gray-200 overflow-hidden bg-white w-[120vh]">
//                 <div className="opacity-100">
//                   <div className="sm:flex">
//                     <div className="sm:w-1/3">
//                       <div className="rounded-l-[1.4rem] w-[40vh] hidden sm:block sm:h-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${tab.imageSrc})` }}></div>
//                       <div className="w-[40vh] h-44 sm:hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${tab.imageSrc})` }}></div>
//                     </div>
//                     <div className="sm:w-2/3 flex flex-col justify-between">
//                       <div className="p-5 sm:p-8 md:min-h-[300px]">
//                         <span className="uppercase text-blue-500 text-xxs md:text-xs tracking-wider font-semibold block mb-2">Industry</span>
//                         <h3 className="text-2xl md:text-3xl font-semibold mb-4">{tab.label}</h3>
//                         <p className="text-sm md:text-base text-gray-600 mb-6">{tab.description}</p>
//                         <a href={tab.learnMoreLink} className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
//                           Learn more <span aria-hidden="true">&rarr;</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Add more content here */}
//               <div className='w-[40vh]'>
//                 <h1 className='border-b-2 mt-3 border-gray-200'>industies 1</h1>
//                 <h1 className='border-b-2 mt-3 border-gray-200'>industies 2</h1>
//                 <h1 className='border-b-2 mt-3 border-gray-200'>industies 3</h1>
//                 <h1 className='border-b-2 mt-3 border-gray-200'>industies 4</h1>
//               </div>

//               <div>
//                 departments 
//               </div>
//               <div>
//                 use cases
//               </div>
//               </div>
//             </div>
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IndustryTabs;

import React, { useState } from 'react';
import image1 from '../../assets/images/card1.png';
import image2 from '../../assets/images/card2.png';
import image3 from '../../assets/images/card3.png';

const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState('Industries');
  const [selectedItem, setSelectedItem] = useState({
    Industries: 0,
    Departments: 0,
    UseCases: 0,
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Reset the selected item to the first one when the tab changes
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
          description: 'Description for Industry 1',
          imageSrc: image1,
          learnMoreLink: '/solutions/manufacturing-analytics',
        },
        {
          title: 'Industry 2',
          description: 'Description for Industry 2',
          imageSrc: image1,
          learnMoreLink: '/solutions/manufacturing-analytics',
        },
        {
          title: 'Industry 3',
          description: 'Description for Industry 3',
          imageSrc: image1,
          learnMoreLink: '/solutions/manufacturing-analytics',
        },
        {
          title: 'Industry 4',
          description: 'Description for Industry 4',
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
          description: 'Description for Department 1',
          imageSrc: image2,
          learnMoreLink: '/solutions/life-sciences',
        },
        {
          title: 'Department 2',
          description: 'Description for Department 2',
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
          description: 'Description for Use Case 1',
          imageSrc: image3,
          learnMoreLink: '/solutions/financial-services',
        },
        {
          title: 'Use Case 2',
          description: 'Description for Use Case 2',
          imageSrc: image3,
          learnMoreLink: '/solutions/financial-services',
        },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl relative z-20 mt-0 font-roboto">
      <h2 className="mx-auto max-w-xs md:max-w-md lg:max-w-lg text-center text-bold block text-2xl md:text-3xl  font-bold lg:text-4xl mb-10 md:mb-14">
       <span className='text-blue-700'>Empower teams</span>  across industries &amp; departments
      </h2>
      <div className="flex flex-col overflow-hidden">
        <nav className="relative before:content-[''] before:block before:h-1 before:w-full before:bg-gray-10 before:absolute before:-bottom-px before:left-0">
          <ul className="flex w-full mx-auto max-w-4xl">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`w-full relative top-px text-center cursor-pointer hover:text-gray-600 border-b-4 font-heading flex justify-between items-center md:text-lg transition-all flex-1 ${
                  activeTab === tab.id ? 'bg-blue-100 text-gray-600 border-b-blue-500' : 'bg-transparent text-gray-600 border-b-gray-10'
                }`}
              >
                <button
                  className="block w-full text-center mx-auto py-3.5 px-1.5 md:px-3.5 focus focus-visible:-outline-offset-4 focus-visible:outline-black"
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="pt-3.5 md:pt-7 lg:pt-14">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`tab-panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={activeTab !== tab.id}
              className="flex"
            >
          
              <div className="rounded-l-3xl border border-gray-200 overflow-hidden bg-white w-[120vh]">
                <div className="opacity-100">
                  <div className="sm:flex">
                    <div className="sm:w-1/3">
                      <div
                        className="rounded-l-[1.4rem] w-[40vh] hidden sm:block sm:h-[50vh] bg-no-repeat bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${tab.items[selectedItem[tab.id]].imageSrc})`,
                        }}
                      ></div>
                      <div
                        className="w-[40vh] h-[50vh] sm:hidden bg-no-repeat  bg-center"
                        style={{
                          backgroundImage: `url(${tab.items[selectedItem[tab.id]].imageSrc})`,
                        }}
                      ></div>
                    </div>
                    <div className="sm:w-2/3 flex flex-col justify-between">
                      <div className="p-5 sm:p-8 md:min-h-[300px]">
                        <span className="uppercase text-blue-500 text-xxs md:text-xs tracking-wider font-semibold block mb-2">
                          {tab.label}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                          {tab.items[selectedItem[tab.id]].title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-6">
                          {tab.items[selectedItem[tab.id]].description}
                        </p>
                        <a
                          href={tab.items[selectedItem[tab.id]].learnMoreLink}
                          className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                        >
                          Learn more <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50vh] h-[50vh]">
                {tab.items.map((item, index) => (
                  <h1
                    key={index}
                    className={`border-b-2 mt-4 p-1 ml-12 border-gray-200 cursor-pointer ${
                      selectedItem[tab.id] === index ? 'font-bold text-blue-700 transition-colors ' : ''
                    }`}
                    onClick={() => handleItemClick(tab.id, index)}
                  >
                    {item.title}
                  </h1>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default IndustryTabs;


// import React, { useState } from 'react';
// import image1 from '../../assets/images/card1.png';

// const IndustryTabs = () => {
//   const [activeIndustryTab, setActiveIndustryTab] = useState('manufacturing');
//   const [activeDepartmentTab, setActiveDepartmentTab] = useState('marketing');

//   const handleIndustryTabClick = (tab) => {
//     setActiveIndustryTab(tab);
//   };

//   const handleDepartmentTabClick = (tab) => {
//     setActiveDepartmentTab(tab);
//   };

//   const industryTabs = [
//     {
//       id: 'manufacturing',
//       label: 'Manufacturing',
//       description: 'Reduce supply chain disruptions, improve production quality and safety, and boost profitability with better insights into the manufacturing process.',
//       imageSrc: image1,
//       learnMoreLink: '/solutions/manufacturing-analytics',
//     },
//     {
//       id: 'lifesciences',
//       label: 'Life Sciences',
//       description: 'Description for Life Sciences',
//       imageSrc: '',
//       learnMoreLink: '/solutions/life-sciences',
//     },
//     {
//       id: 'financialservices',
//       label: 'Financial Services',
//       description: 'Description for Financial Services',
//       imageSrc: '',
//       learnMoreLink: '/solutions/financial-services',
//     },
//     {
//       id: 'retail',
//       label: 'Retail & CPG',
//       description: 'Description for Retail & CPG',
//       imageSrc: '',
//       learnMoreLink: '/solutions/retail-cpg',
//     },
//     {
//       id: 'publicsector',
//       label: 'Public Sector',
//       description: 'Description for Public Sector',
//       imageSrc: '',
//       learnMoreLink: '/solutions/public-sector',
//     },
//   ];

//   const departmentTabs = [
//     {
//       id: 'marketing',
//       label: 'Marketing',
//       description: 'Description for Marketing department',
//       imageSrc: '', // Add image source if needed
//       learnMoreLink: '/solutions/marketing',
//     },
//     {
//       id: 'finance',
//       label: 'Finance',
//       description: 'Description for Finance department',
//       imageSrc: '',
//       learnMoreLink: '/solutions/finance',
//     },
//     {
//       id: 'humanresources',
//       label: 'Human Resources',
//       description: 'Description for Human Resources department',
//       imageSrc: '',
//       learnMoreLink: '/solutions/human-resources',
//     },
//     {
//       id: 'supplychain',
//       label: 'Supply Chain',
//       description: 'Description for Supply Chain department',
//       imageSrc: '',
//       learnMoreLink: '/solutions/supply-chain',
//     },
//   ];

//   const useCases = [
//     {
//       id: 'spreadsheetAutomation',
//       title: 'Spreadsheet Automation',
//       description: 'Description for Spreadsheet Automation use case',
//       imageSrc: '', // Add image source if needed
//       learnMoreLink: '/solutions/spreadsheet-automation',
//     },
//     // Add more use cases as needed
//   ];

//   return (
//     <div className="mx-auto max-w-7xl relative z-20 mt-10">
//       <h2 className="mx-auto max-w-xs md:max-w-md lg:max -w-lg text-center text-bold block text-2xl md:text-3xl lg:text-4xl mb-10 md:mb-14">
//         Empower teams across industries &amp; departments
//       </h2>
//       <div className="flex flex-col overflow-hidden">
//         {/* Industry Tabs */}
//         <nav className="relative before:content-[&quot;&quot;] before:block before:h-1 before:w-full before:bg-gray-10 before:absolute before:-bottom-px before:left-0">
//           <ul className="flex w-full mx-auto max-w-4xl">
//             {industryTabs.map((tab) => (
//               <li
//                 key={tab.id}
//                 className={`w-full relative top-px text-center cursor-pointer hover:text-gray-600 border-b-4 font-heading flex justify-between items-center md:text-lg transition-all flex-1 ${
//                   activeIndustryTab === tab.id ? 'bg-blue-100 text-gray-600 border-b-blue-500' : 'bg-transparent text-gray-200 border-b-gray-10'
//                 }`}
//               >
//                 <button
//                   className="block w-full text-center mx-auto py-3.5 px-1.5 md:px-3.5 focus focus-visible:-outline-offset-4 focus-visible:outline-black"
//                   onClick={() => handleIndustryTabClick(tab.id)}
//                 >
//                   {tab.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <main className="pt-3.5 md:pt-7 lg:pt-14">
//           {industryTabs.map((tab) => (
//             <div
//               key={tab.id}
//               className="focus focus-visible:outline-black focus-visible:-outline-offset-2"
//               id={`tab-panel-${tab.id}`}
//               role="tabpanel"
//               aria-labelledby={`tab-${tab.id}`}
//               hidden={activeIndustryTab !== tab.id}
//             >
//               <div className="rounded-l-3xl border border-gray-200 overflow-hidden bg-white">
//                 <div className="opacity-100">
//                   <div className="sm:flex">
//                     <div className="sm:w-1/3">
//                       <div className="rounded-l-[1.4rem] w-full hidden sm:block sm:h-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${tab.imageSrc})` }}></div>
//                       <div className="w-full h-44 sm:hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${tab.imageSrc})` }}></div>
//                     </div>
//                     <div className="sm:w-2/3 flex flex-col justify-between">
//                       <div className="p-5 sm:p-8 md:min-h-[300px]">
//                         <span className="uppercase text-blue-500 text-xxs md:text-xs tracking-wider font-semibold block mb-2">Industry</span>
//                         <h3 className="text-2xl md:text-3xl font-semibold mb-4">{tab.label}</h3>
//                         <p className="text-sm md:text-base text-gray-600 mb-6">{tab.description}</p>
//                         <a href={tab.learnMoreLink} className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
//                           Learn more <span aria-hidden="true">&rarr;</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </main>
//       </div>

//      {/* Department Tabs */}
// <div className="mx-auto max-w-7xl relative z-20 mt-10">
//   <h2 className="mx-auto max-w-xs md:max-w-md lg:max-w-lg text-center text-bold block text-2xl md:text-3xl lg:text-4xl mb-10 md:mb-14">
//     Departments
//   </h2>
//   <div className="flex flex-col overflow-hidden">
//     <nav className="relative before:content-[&quot;&quot;] before:block before:h-1 before:w-full before:bg-gray-10 before:absolute before:-bottom-px before:left-0">
//       <ul className="flex w-full mx-auto max-w-4xl">
//         {departmentTabs.map((tab) => (
//           <li
//             key={tab.id}
//             className={`w-full relative top-px text-center cursor-pointer hover:text-gray-600 border-b-4 font-heading flex justify-between items-center md:text-lg transition-all flex-1 ${
//               activeDepartmentTab === tab.id ? 'bg-blue-100 text-gray-600 border-b-blue-500' : 'bg-transparent text-gray-200 border-b-gray-10'
//             }`}
//           >
//             <button
//               className="block w-full text-center mx-auto py-3.5 px-1.5 md:px-3.5 focus focus-visible:-outline-offset-4 focus-visible:outline-black"
//               onClick={() => handleDepartmentTabClick(tab.id)}
//             >
//               {tab.label}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//     <main className="pt-3.5 md:pt-7 lg:pt-14">
//       {departmentTabs.map((tab) => (
//         <div
//           key={tab.id}
//           className="focus focus-visible:outline-black focus-visible:-outline-offset-2"
//           id={`tab-panel-${tab.id}`}
//           role="tabpanel"
//           aria-labelledby={`tab-${tab.id}`}
//           hidden={activeDepartmentTab !== tab.id}
//         >
//           <div className="rounded-l-3xl border border-gray-200 overflow-hidden bg-white">
//             <div className="opacity-100">
//               <div className="sm:flex">
//                 <div className="sm:w-1/3">
//                   <div className="rounded-l-[1.4rem] w-full hidden sm:block sm:h-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${tab.imageSrc})` }}></div>
//                   <div className="w-full h-44 sm:hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${tab.imageSrc})` }}></div>
//                 </div>
//                 <div className="sm:w-2/3 flex flex-col justify-between">
//                   <div className="p-5 sm:p-8 md:min-h-[300px]">
//                     <span className="uppercase text-blue-500 text-xxs md:text-xs tracking-wider font-semibold block mb-2">Department</span>
//                     <h3 className="text-2xl md:text-3xl font-semibold mb-4">{tab.label}</h3>
//                     <p className="text-sm md:text-base text-gray-600 mb-6">{tab.description}</p>
//                     <a href={tab.learnMoreLink} className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
//                       Learn more <span aria-hidden="true">&rarr;</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </main>
//   </div>
// </div>
// </div>

//     );}
// export default IndustryTabs
