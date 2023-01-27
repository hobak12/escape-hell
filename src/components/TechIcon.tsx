const TechIcon = ({ src, alt, className = "w-20 h-20" }: TechIconImg) => {
  return <img className={className} src={src} alt={alt} />;
};

export default TechIcon;
