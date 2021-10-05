import React,{useState,useEffect} from 'react'
import MarketingApp from './MarketingApp';


const App = () => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 5000);
        setTimeout(() => {
            setShow(true);
        }, 10000);
    }, [])
    return <div>this is the container app<hr />
        {show ? <MarketingApp /> : null}</div>
}

export default App;