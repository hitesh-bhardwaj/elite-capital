import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Hero from '@/components/InvestWithUs/Hero';
import About from '@/components/InvestWithUs/About';
import Stats from '@/components/InvestWithUs/Stats';
import Portfolio from '@/components/InvestWithUs/Portfolio';
import Contact from '@/components/Common/Contact';
import WhyUs from '@/components/InvestWithUs/WhyUs';
import Residential from '@/components/InvestWithUs/Residential';
import Factors from '@/components/InvestWithUs/Exclusive';
import { fadeIn, fadeUp, paraAnim, titleAnim } from '@/components/gsapAnimations';



export default function Invest() {
   fadeUp()
     paraAnim()
     titleAnim()
     fadeIn()
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Stats/>
    <WhyUs/>
    <Residential/>
    <Factors/>
   <Portfolio/>
   <Contact/>
    <Footer/>

    
  
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'invest', 'common'
      ])),
    },
  }
}



//   "cookiesPolicy": [
//     {
//       "title": "<h2 classname='text-5vw'>What are cookies?</h2>",
//       "html": "Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognizes that cookie. Cookies are useful because they allow a website to recognize a user's device.<br><br>You can find more information about cookies at: <a href='https://allaboutcookies.org' target='_blank'>https://allaboutcookies.org</a> and <a href='https://youronlinechoices.eu' target='_blank'>https://youronlinechoices.eu</a>.<br><br>Cookies do lots of different jobs, like letting you navigate between pages efficiently, remembering your preferences, and generally improving the user experience. They can also help to ensure that adverts you see online are more relevant to you and your interests."
//     },
//     {
//       "title": "Which cookies are used on this website?",
//       "html": "The cookies used on this website have been categorised based on the categories found in the ICC UK Cookie guide.<br>A list of all the cookie types used on this website by category is set out below."
//     },
//     {
//       "title": "Strictly necessary cookies",
//       "html": "These cookies are essential in order to enable you to move around the website and use its features, such as accessing secure areas of the website. Without these cookies, services you have asked for cannot be provided."
//     },
//     {
//       "title": "Performance cookies",
//       "html": "These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don’t collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works."
//     },
//     {
//       "title": "Functional cookies",
//       "html": "These cookies allow a website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize. They may also be used to provide services you have asked for such as watching a video or commenting on a blog. The information these cookies collect may be anonymized and they cannot track your browsing activity on other websites."
//     },
//     {
//       "title": "Google Analytics",
//       "html": "These cookies are used to collect information about how visitors use our site. We use the information to compile reports and to help us improve the site. The cookies collect information in an anonymous form, including the number of visitors to the site, where visitors have come to the site from and the pages they visited.<br><br>For further details visit: <a href='https://policies.google.com/privacy' target='_blank'>https://policies.google.com/privacy</a>."
//     },
//     {
//       "title": "How can the cookies be removed?",
//       "html": "You may refuse to accept cookies by activating the setting on your internet browser which allows you to refuse the setting of cookies. For more information about cookies including how to set your internet browser to reject cookies please go to <a href='https://www.allaboutcookies.org' target='_blank'>www.allaboutcookies.org</a>.<br>To opt out of Google Analytics visit <a href='https://tools.google.com/dlpage/gaoptout' target='_blank'>https://tools.google.com/dlpage/gaoptout</a>."
//     }
//   ]