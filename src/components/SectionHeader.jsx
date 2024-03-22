/* eslint-disable react/prop-types */
const SectionHeader = ({title, description}) => {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-5 mb-6 md:mb-10 lg:mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeader;