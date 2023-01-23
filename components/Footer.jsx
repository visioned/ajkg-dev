import React from 'react';

const Index = () => {
  function year() {
    return new Date().getFullYear();
  }
  return (
    <footer>
      <div className='flex justify-center items-center py-5'>
        <p>{year()} 🐈 ajkg.dev</p>
      </div>
    </footer>
  );
};

export default Index;
