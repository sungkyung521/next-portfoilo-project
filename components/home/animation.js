import dynamic from 'next/dynamic';
import lottieJson from '/public/main-image.json';

// Lottie 컴포넌트를 SSR 비활성화해서 불러오기
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 500, height: 500 }}
    />
  );
}


/*
import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '/public/main-image.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play      
    />
  )
}
//*/