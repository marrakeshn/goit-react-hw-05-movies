import { Dna } from 'react-loader-spinner';


export const Loader = ({ pending }) => {
    return (
        <Dna
            visible={true}
            height="600"
            width="1100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    );
};