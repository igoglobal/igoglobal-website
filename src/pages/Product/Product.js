import {useLocation} from 'react-router-dom';

import Title from "../../core/utils/Title";

import Iroko from "../../components/Products/Iroko";
import PureVirgin from '../../components/Products/PureVirgin';


function Product () {
    const location = useLocation();
    const isIroko = location.pathname === '/iroko'
    const isPureVirgin = location.pathname === '/pure-virgin'

    return (
        <>
            <Title
                title={isIroko ? "Iroko" : "Pure Virgin"}
                sectionName={isIroko ? "iroko": "pure virgin"}
            />
            <div className="page-content">   
                <section className="site_content">
                    <div className="container">
                        { isIroko && <Iroko/>}
                        { isPureVirgin && <PureVirgin/>}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Product;