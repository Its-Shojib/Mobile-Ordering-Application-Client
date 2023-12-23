import PropTypes from 'prop-types';

const MobileCard = ({ mobile }) => {
  const { price, name, type, processor, memory, OS, img, brand } = mobile;

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg text-black">
      <img className="w-full h-48" src={img} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-lg mb-2">{`Brand: ${brand}`}</p>
        <p className="text-lg mb-2">{`Type: ${type}`}</p>
        <p className="text-lg mb-2">{`Processor: ${processor}`}</p>
        <p className="text-lg mb-2">{`Memory: ${memory} GB`}</p>
        <p className="text-lg">{`OS: ${OS}`}</p>
      </div>
      <div className="px-6 py-4">
        <span className="text-xl font-semibold">${price}</span>
      </div>
    </div>
  );
};
MobileCard.propTypes = {
    mobile: PropTypes.node,
}
export default MobileCard;