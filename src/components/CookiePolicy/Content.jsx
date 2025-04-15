import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Content = () => {
  const { t } = useTranslation("cookie");
  const des = t("des", { returnObjects: true });
  const cookie2description = t("cookie2description", { returnObjects: true });
  const cookie3description = t("cookie3description", { returnObjects: true });
  const cookie4description = t("cookie4description", { returnObjects: true });
  const cookie3content = t("cookie3content", { returnObjects: true });
  // console.log(des)

  return (
    <div className="w-screen h-full py-[5vw] px-[5vw]" id="cookie-content">
      {des.map((des, index) => (
        <p key={index}>{des}</p>
      ))}
      <div className="w-full h-[1px] bg-black my-[5vw] "></div>
      <div className="w-full flex gap-[1vw]">
        <div className="w-[5%]"></div>
        <div className="flex flex-col gap-[1.5vw] w-[95%]">
          <h2 className="heading-2 ">{t("cookie2title")}</h2>
          <div>
          {cookie2description.map((cookie, index) => (
            <p key={index} className="mb-[2vw]">
              {cookie}
              <span className={`${index == 1 ? "" : "hidden"}`}>
                <Link href={"https://allaboutcookies.org"}>
                  https://allaboutcookies.org
                </Link>{" "}
                and{" "}
                <Link href={"https://allaboutcookies.org"}>
                  https://youronlinechoices
                </Link>{" "}
              </span>
            </p>
          ))}

          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black my-[5vw] "></div>
      <div className="w-full flex gap-[1vw]">
        <div className="w-[5%]"></div>
        <div className="flex flex-col gap-[1.5vw] w-[95%]">
          <h2 className="heading-2 ">{t("cookie3title")}</h2>
          <div>
          {cookie3description.map((cookie, index) => (
            <p key={index} className="mb-[2vw]">
              {cookie}
              
            </p>
          ))}

          </div>
          <div className="pl-[10vw] ">

          {
            cookie3content.map((content,index)=>(
              <div key={index} className="flex flex-col gap-[1.5vw] mb-[4vw]">
                <h3 className="heading-2">{content.title}</h3>
                {
                  content.description.map((des,index)=>(<p>
                    {des} <Link href={"https://policies.google.com/privacy"} className={`${index==2?"":"hidden"}`}>https://policies.google.com/privacy</Link>
                  </p>))
                }
                

              </div>
            ))
          }
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black my-[5vw] "></div>
      <div className="flex w-full gap-[1.5vw]">
      <div className="w-[5%]"></div>
      <div className="w-[95%] flex flex-col gap-[1.5vw]">
      <h2 className="heading-2 ">{t("cookie4title")}</h2>
      <div>
          {cookie4description.map((cookie, index) => (
            <p key={index} className="mb-[2vw]">
              {cookie}
              <Link className={`${index>=0?"":"hidden"}`} href={`${index==0?"https://www.allaboutcookies.org":"https://tools.google.com/dlpage/gaoptout"}`}>{index==0?(<span>https://www.allaboutcookies.org</span>):(<span>https://tools.google.com/dlpage/gaoptout</span>)}</Link>
            </p>
          ))}
     </div>

      </div>

      </div>
    </div>
  );
};

export default Content;
