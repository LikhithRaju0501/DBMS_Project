import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const Heading = () => {
  return (
    <div style={{ backgroundColor: '#f7d794', width: '150%' }}>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        {' '}
        <h2 style={{ marginLeft: '15%', marginRight: 5 }}>
          Subscribe any Platform of your choice !!
        </h2>{' '}
        <motion.h2
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{
            scale: 0.8,
            rotate: 360,
            borderRadius: '100%',
          }}
        >
          {' '}
          🙂{' '}
        </motion.h2>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Heading;
