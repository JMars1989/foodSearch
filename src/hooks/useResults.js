import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //const searchApi = async searchTerm => {
  const searchApi = async (foodTypeTerm, locationTerm) => {
    console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          //term: searchTerm,
          term: foodTypeTerm,
          //location: 'san jose'
          location: locationTerm
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    //searchApi('pasta');
    searchApi('pizza', 'Lafayette')
  }, []);

  return [searchApi, results, errorMessage];
};
