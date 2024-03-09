import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg,setBigshoeImg]=useState(bigShoe1)
  return (
    <section
      id="home"
      className="padding-x
      border-red-500
      w-full min-h-screen flex xl:flex-row flex-col justify-center items-center
       max-container gap-10"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative pr-10 lg:z-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-2">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex gap-16 items-start mt-20 flex-wrap">
          {statistics.map((stats, index) => {
            const { value, label } = stats;
            return (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="xl:w-3/5 flex justify-center items-center
      relative xl:min-h-screen bg-primary bg-hero bg-cover bg-center max-xl:py-40"
      >
        <img src={bigShoeImg} alt="shoe1"
        width={610}
        height={500}
        className="object-cover relative lg:z-10"
        />
        <div className="flex absolute -bottom-[5%] sm:gap-6 gap-4 max-sm:px-6">
          {shoes.map((shoe,index)=>{
            return(
              <div key={index}>
                <ShoeCard imageUrl={shoe} changeBigShoeImage={(shoe)=>{setBigshoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
