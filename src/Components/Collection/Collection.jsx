import { useEffect, useState } from 'react';
import bg2 from '../../assets/background02.png'
import Card from '../card/Card';

const Collection = () => {
    const [dataLoad, setData] = useState([]);
    useEffect(() => {
        fetch('/wedding.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="max-w-screen-xl mx-auto">

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
              {
                    dataLoad?.map(card => <Card key={card.id} card={card}></Card>)
                }
              </div>

            </div>

        </div>
    );
};

export default Collection;