import { Oval } from 'react-loader-spinner';


const OvalLoader = () => {
    return (
        <Oval 
            visible={true}
            height={20}
            width={20}
            strokeWidth={5}
            color='white'
        />
    )
}

const loaderSpinner = {
    OvalLoader
}


export default loaderSpinner;