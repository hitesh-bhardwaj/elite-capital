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
        <p data-para-anim className="pt-[4vw] w-[95%] content">{t('portfolioText')}</p>
      </div> 
      
      <div className='flex justify-between mobile:flex-col mobile:space-y-4 mobile:py-[5vw] tablet:flex-wrap tablet:gap-[4vw] tablet:justify-start'>
        <div className='border-b border-black'>
          <input 
            type="text" 
            placeholder="Search"
            value={filters.search}
            onChange={handleSearchInput}
            className="w-[20vw] p-2 border-none border-b-3 !outline-0 bg-transparent mobile:w-full focus-visible:ring-0 focus:!border-none focus:!outline-0 tablet:w-[30vw] "
          />
        </div>
        
        <div className="border-b border-black">
          <Select onValueChange={(value) => handleFilterChange(value, "propertyName")} >
            <SelectTrigger className="w-[15vw] mobile:w-full tablet:w-[30vw] ">
              <SelectValue placeholder="Property Name" />
            </SelectTrigger>
            <SelectContent className='bg-[#F2F2E9]'>
              <SelectGroup >
                <SelectLabel>Properties</SelectLabel>
                <SelectItem value="B">All Properties</SelectItem>
                {propertyNames.map((name, index) => (
                  <SelectItem key={index} value={name}>{name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className='border-b border-black'>
          <Select onValueChange={(value) => handleFilterChange(value, "location")}>
            <SelectTrigger className="w-[15vw] mobile:w-full tablet:w-[30vw]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className='bg-[#F2F2E9]'>
              <SelectGroup>
                <SelectLabel>Locations</SelectLabel>
                <SelectItem value="C">All Locations</SelectItem>
                {locations.map((location, index) => (
                  <SelectItem key={index} value={location}>{location}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className='border-b border-black'>
          <Select onValueChange={(value) => handleFilterChange(value, "metrics")}>
            <SelectTrigger className="w-[15vw] mobile:w-full tablet:w-[30vw]">
              <SelectValue placeholder="Metrics" />
            </SelectTrigger>
            <SelectContent className='bg-[#F2F2E9]'>
              <SelectGroup>
                <SelectLabel>Metrics</SelectLabel>
                <SelectItem value="D">All Metrics</SelectItem>
                {metricsOptions.map((metric, index) => (
                  <SelectItem key={index} value={metric}>{metric}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
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