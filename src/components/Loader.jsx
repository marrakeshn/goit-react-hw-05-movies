import { Dna } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const delay = 2000;
let setTimeoutInstance;
  

export const Loader = ({ pending }) => {
  const [isExpired, setIsExpired] = useState(true);

  useEffect(() => {
    if (pending) {
      setIsExpired(true);

      if (setTimeoutInstance) {
        clearTimeout(setTimeoutInstance);
      }
      setTimeoutInstance = setTimeout(() => {
        setIsExpired(false);
      }, delay);
    }
  }, [pending]);

  if (!isExpired) {
    return (
        <Dna
            visible={true}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    );
  }
};