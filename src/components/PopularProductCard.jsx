import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="w-full flex flex-col justify-center max-sm:items-center max-sm:w-full">
      <img src={imgURL} alt={name} className="h-[280px] w-[280px]" />
      <div className="mt-6 flex justify-start gap-3">
        <img src={star} alt="reting" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
