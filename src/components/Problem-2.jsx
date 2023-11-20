import React from 'react';
import StaticModal from './StaticModal';

const Problem2 = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className='d-flex justify-content-center gap-3'>
          <button className='btn btn-lg btn-outline-primary' type='button'>
            All Contacts
          </button>
          <button className='btn btn-lg btn-outline-warning' type='button'>
            US Contacts
          </button>
        </div>
      </div>

      <StaticModal />
    </div>
  );
};

export default Problem2;
