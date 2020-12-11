import { Link } from 'react-router';

const url = 'https://docs.google.com/document/d/14SRAbT6_RuSDx6h03-kbN1rPjNfAFvVj_joTQYiVwks/edit';

const FullItinerary = () => {
  return (
    <Link className='itinerary' target="_blank" to={url} >Click to see details</Link>
  )
};

export default FullItinerary;
