import ReactDOM from 'react-dom';
import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange,onButtonSubmit } , )=> {
    return (
        <div>
            <p className='f3'>
                {'This will detect faces in your images'}
            </p>
            <div className='center'>
                <div className='form center pa4  br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib black bg-orange' 
                    onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<ImageLinkForm />, document.getElementById('root'));

export default ImageLinkForm;