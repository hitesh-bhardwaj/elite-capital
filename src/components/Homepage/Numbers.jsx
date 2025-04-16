import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Numbers = () => {
    const createTimeline = (triggerClass, countClasses, start, end) => {
        useEffect(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerClass,
              start: start,
              end: end,
            },
          });
    
          countClasses.forEach((countClass) => {
            tl.to(countClass.selector, {
              top: countClass.top,
              stagger: 0.25,
              delay: countClass.delay,
              duration: 1.5,
              ease: "power2.inOut",
            });
          });
        });
      };
    
      const counterClasses = [
        { selector: ".counter-3", top: "-100px", delay: 0.1 },
        { selector: ".counter-2", top: "-1030px", delay: -1.3 },
        { selector: ".counter-1", top: "-825px", delay: -1.3 },
      ];
    
      const countClasses = [
        { selector: ".count-4", top: "-120px", delay: 0.1 },
        { selector: ".count-3", top: "-1035px", delay: -1.2 },
        { selector: ".count-2", top: "-423px", delay: -1.3 },
      ];
    
      const countNewClasses = [
        { selector: ".countnew-1", top: "-110px", delay: -0.2 },
        { selector: ".countnew-3", top: "-1030px", delay: -1.0 },
        { selector: ".countnew-2", top: "-519px", delay: -1.3 },
        { selector: ".countnew-4", top: "-113px", delay: -1.3 },
      ];
      const countLastClasses = [
        { selector: ".countlast-1", top: "-113px", delay: -0.2 },
        { selector: ".countlast-3", top: "-115px", delay: -1.0 },
        { selector: ".countlast-2", top: "-114px", delay: -1.3 },
        { selector: ".countlast-4", top: "-113px", delay: -1.3 },
      ];
      if (globalThis.innerWidth > 1023) {
      
        createTimeline(".countlast", countLastClasses, "top 90%", null);
        createTimeline(".counter", counterClasses, "top 90%", null);
        createTimeline(".count", countNewClasses, "top 90%", null);
        createTimeline(".count", countClasses, "top 90%", null);
      } else {
        createTimeline(".counter", counterClasses, "top 90%", null);
        createTimeline(".count", countNewClasses, "top 80%", "bottom 80%");
        createTimeline(".count", countClasses, "top 80%", "bottom 80%");
      }
    

  return (
    <>
     <div className="flex justify-between items-end mt-[5vw] mobile:flex-col mobile:items-start mobile:gap-[10vw] mobile:mt-[10vw]">
          <div className="flex w-full px-[7vw] pl-[10vw] items-center justify-between gap-[5vw] mobile:grid mobile:grid-cols-2 mobile:items-start mobile:space-between mobile:w-full mobile:gap-y-[5vw]">
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="">
                <div className="counter">
                  
                  <div className="counter-1 digit font-semibold">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>

                  </div>
                  <div className="counter-2 digit font-semibold ">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                  </div>
                  <div className="counter-3 translate-y-[100%] digit font-semibold">
                    <div className="num">+</div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='w-[1px] h-[10vw] bg-white'/>

         
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="countnew">
              <div className="countnew-1 digit font-semibold translate-y-[100px]">
                  <div className="num">$</div>
                
              
                </div>
                <div className="countnew-2 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num text-center">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
              
                </div>
                <div className="countnew-3 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                  <div className="num">6</div>
                  <div className="num">7</div>
                  <div className="num">8</div>
                  <div className="num">9</div>
                  <div className="num">0</div>
                </div>
                <div className="countnew-4 digit font-semibold">
                  <div className="num ">A</div>
                  <div className="num ">B</div>
                </div>
              </div>
            </div>
            <div className='w-[1px] h-[10vw] bg-white'/>
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="count">
                <div className="count-2 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                </div>
                <div className="count-3 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
                  <div className="num">2</div>
                  <div className="num">3</div>
                  <div className="num">4</div>
                  <div className="num">5</div>
                  <div className="num">6</div>
                  <div className="num">7</div>
                  <div className="num">8</div>
                  <div className="num">9</div>
                  <div className="num">0</div>
                </div>
                <div className="count-4 digit font-semibold translate-y-[100px]">
                  <div className="num">+</div>
                </div>
              </div>
            
            </div>
            <div className='w-[1px] h-[10vw] bg-white'/>
            <div className="flex items-end gap-[8px] mobile:flex-col mobile:items-start mobile:gap-0">
              <div className="countlast">
              <div className="countlast-1 digit font-semibold translate-y-[100px]">
              <div className="num">$</div>

                </div>
                <div className="countlast-2 digit font-semibold">
                  <div className="num">0</div>
                  <div className="num">1</div>
 
                </div>
                <div className="countlast-3 digit font-semibold">
                  <div className="num">A</div>
                  <div className="num">B</div>
 
                </div>
                <div className="countlast-4 digit font-semibold translate-y-[100px]">
                  <div className="num">+</div>
                </div>
              </div>
            
            </div>
          </div>
         
        </div>
    
    </>
  )
}

export default Numbers