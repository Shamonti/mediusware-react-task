import React, { useEffect, useState } from 'react';

const Problem1 = () => {
  const [show, setShow] = useState('all');

  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const [task, setTask] = useState([]);

  const handleClick = val => {
    setShow(val);
  };

  const handleAddTask = () => {
    setTask([...task, { name: name, status: status }]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddTask();
    setName('');
    setStatus('');
  };

  const sortTasksByStatus = tasks => {
    const statusOrder = ['active', 'completed', 'pending', 'archive'];
    return tasks.sort((a, b) => {
      if (a.status === 'active' && b.status !== 'active') {
        return -1;
      }
      if (b.status === 'active' && a.status !== 'active') {
        return 1;
      }
      return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    });
  };

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
        <div className='col-6 '>
          <form
            className='row gy-2 gx-3 align-items-center mb-4'
            onSubmit={handleSubmit}
          >
            <div className='col-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className='col-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Status'
                value={status}
                onChange={event => setStatus(event.target.value)}
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='col-8'>
          <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'all' && 'active'}`}
                type='button'
                onClick={() => handleClick('all')}
              >
                All
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'active' && 'active'}`}
                type='button'
                onClick={() => handleClick('active')}
              >
                Active
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'completed' && 'active'}`}
                type='button'
                onClick={() => handleClick('completed')}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className='tab-content'></div>
          <table className='table table-striped '>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Status</th>
              </tr>
              {sortTasksByStatus(
                show === 'all'
                  ? task
                  : task.filter(el => show === el.status.toLowerCase())
              ).map((el, index) => (
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.status}</td>
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
