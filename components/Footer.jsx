import React from 'react';

const Index = () => {
  function year() {
    return new Date().getFullYear();
  }
  return (
    <footer>
      <div>
        <p className='flex justify-center '>{year()} 🐈 ajkg.dev</p>
      </div>
    </footer>
  );
};

export default Index;
