'use client';

import { useState, useEffect } from 'react';

import Footer from './Footer';

export default function FooterLayout() {
  const [funcao, setFuncao] = useState('');

  useEffect(() => {
   
    const funcao1 = 'admin';
    if (funcao){
      setFuncao(funcao1.toLowerCase());
    }
  
  
  }, []);

  return <Footer funcao={funcao} />;
}