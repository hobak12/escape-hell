const TechIcon = ({ src, alt }: TechIconImg) => {
  return <img className="w-20 h-20" src={`/icons/${src}.png`} alt={alt} />;
};

export default TechIcon;
