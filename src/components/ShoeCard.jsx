const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImg }) => {

    const handleClick=()=>{
        changeBigShoeImage(imageUrl.bigShoe)
    }
  return (
    <div className={`border-2 rounded-xl 
    ${bigShoeImg === imageUrl.bigShoe
    ? 'border-coral-red'
    : 'border-transparent'
    }
    cursor-pointer
    `
    
    } onClick={handleClick}>
      <div className="flex justify-center items-center bg-cover bg-center bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imageUrl.thumbnail}
          alt="shoe Collection"
          width={127}
          height={103}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
