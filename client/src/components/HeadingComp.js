import React from 'react';
import { motion } from 'framer-motion';

const HeadingComp = (props) => {
  return (
    <div
      style={{
        fontFamily: 'Righteous',
        fontSize: 40,
        wordWrap: 'break-word',
        color: 'black',
      }}
    >
      <motion.p
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5 }}
      >
        RACHITH AND LIKHITH MOVIES, SONGS DATABASE
      </motion.p>
    </div>
  );
};

export default HeadingComp;
