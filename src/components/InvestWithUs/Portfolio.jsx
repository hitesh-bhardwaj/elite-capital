import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import LinkButton from '../ui/LinkButton';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Portfolio = () => {
  const { t } = useTranslation('invest');
  const allPortfolios = t('portfolios', { returnObjects: true });
  
 
  const [filters, setFilters] = useState({
    search: "",
    propertyName: "",
    location: "",
    metrics: ""
  });
  
  
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);
  
 
  const handleFilterChange = (value, filterType) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };
  
 
  useEffect(() => {
    
    let results = [...allPortfolios];
    
  
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower) ||
        (item.address && typeof item.address === 'string' && item.address.toLowerCase().includes(searchLower))
      );
    }
    
   
    if (filters.propertyName) {
      results = results.filter(item => item.title === filters.propertyName);
    }
    
   
    if (filters.location) {
      results = results.filter(item => item.location === filters.location);
    }
    
  
    if (filters.metrics) {
      results = results.filter(item => item.metrics === filters.metrics);
    }
    
    setFilteredPortfolios(results);
  }, [filters]); 
  useEffect(() => {
    setFilteredPortfolios(allPortfolios);
  }, []);
  
  const propertyNames = [...new Set(allPortfolios.map(item => item.title))];
  const locations = [...new Set(allPortfolios.map(item => item.location))];
  const metricsOptions = [...new Set(allPortfolios.map(item => item.metrics).filter(Boolean))];

  
  const handleSearchInput = (e) => {
    handleFilterChange(e.target.value, "search");
  };
 
  const resetFilters = () => {
    setFilters({ search: "", propertyName: "", location: "", metrics: "" });
  };

  return (
    <section className='w-screen h-full bg-[#F2F2E9] p-[4vw] py-[7vw] space-y-[3vw]'>
      <div className='space-y-[2vw] mobile:space-y-[4vw] tablet:space-y-[3vw]'>
        <h2 
          data-title-anim
          className="heading-1 w-[90%]"
          dangerouslySetInnerHTML={{ __html: t('portfolioHead') }}
        ></h2>
        <p data-para-anim className="content">{t('portfolioSub')}</p>
      </div> 
      
     

      <div className='space-y-[3vw] pt-[3vw] mobile:space-y-[13vw] tablet:pt-[7vw] tablet:space-y-[5vw]'>
        {filteredPortfolios.length > 0 ? (
          filteredPortfolios.map((item, index) => (
            <div key={index} className='w-full flex items-center justify-between mobile:flex-col-reverse'>
              <div className='w-1/2 space-y-[2vw] text-black1 font-body px-[3vw] mobile:w-full mobile:px-1'>
                <div className='mobile:space-y-[3vw] mobile:pt-[3vw]'>
                  <h3 data-para-anim className='heading-2 font-medium '>{item.title}</h3>
                  <p data-para-anim className='content'>{item.location}</p>
                </div>
                <div 
                  data-para-anim 
                  dangerouslySetInnerHTML={{__html: item.address}} 
                  className='content mobile:pb-[5vw]'
                />
                <LinkButton 
                  href={item.link} 
                  text={item.cta} 
                  className="mt-[5vw] fadeUp !bg-black1 !text-white !hover:bg-white !hover:text-black1" 
                />
              </div>
              <div className='w-1/2 h-full mobile:w-full'>
                <Image 
                  src={item.img} 
                  alt={`${item.title} image`} 
                  className='fadeUp'
                  loading="lazy" 
                  width={1110} 
                  height={986} 
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-[2vw] mobile:text-[5vw]">No properties match your selected filters.</p>
            <button 
              onClick={resetFilters}
              className="mt-4 px-6 py-2 bg-black1 text-white hover:bg-white hover:text-black1 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;