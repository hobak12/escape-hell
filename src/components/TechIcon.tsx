const TechIcon = ({ src, alt, className = "w-20 h-20" }: TechIconImg) => {
  return <img className={className} src={`/icons/${src}.png`} alt={alt} />;
};

export default TechIcon;
