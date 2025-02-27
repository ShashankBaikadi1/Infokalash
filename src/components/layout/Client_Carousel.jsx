

const Client_Carousel = () => {
    const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",

        
      ];
    return (
        <div className=''>
   
       
          <div className="w- h-38 flex items-center justify-center text-black mt-16">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-3xl font-medium mb-2 text-[#02203c]">With Great Outcomes.</h1>
              <p className="text-lg font-light mb-10 text-[#7c8e9a]">Our customers have gotten offers from awesome companies.</p>
              <div className="w-[1000px] overflow-hidden mask-image-linear-gradient">
                <div className="flex animate-marquee whitespace-nowrap" style={{animation: 'marquee 30s linear infinite'}}>
                  {row1.map((el, index) => (
                    <div key={index} className="flex items-center justify-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[clamp(1rem,1rem+3vmin,3rem)]">
                      <img
                        src={el}
                        alt=""
                        className="object-contain w-full h-full rounded-lg p-5 shadow-md aspect-[16/9]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

export default Client_Carousel
