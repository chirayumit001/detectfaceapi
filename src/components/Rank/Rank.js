import ReactDOM from 'react-dom';
import React from 'react';


const Rank = () => {
    return (
        <div>
            <div className='white f3'>
                {'Chirayu Mittal ki rank is '}
            </div>
            <div className='white f1'>
                {'#1'}
            </div>
        </div>
    );
};

ReactDOM.render(<Rank />, document.getElementById('root'));

export default Rank;