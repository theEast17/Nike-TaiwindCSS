const Button = ({ label, iconUrl,backgroundColor,textColor,borderColor,fullWidth }) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && 'w-full'}`}
    >
      {label}
     {iconUrl && <img
        src={iconUrl}
        alt="arrow right icon"
        className="h-5 w-5 rounded-full"
      />
     }
    </button>
  );
};

export default Button;