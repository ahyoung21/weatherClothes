import React, { useEffect } from 'react';
import { LoadingBox } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCloud, faSun, faUmbrella, faSnowflake } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
  const motion = (sec: number) => {
    let i = 0;
    const aniItem = document.querySelectorAll<HTMLElement>('.animation-item');
    aniItem[i].setAttribute('style', 'display:block');
    i = 1;

    const motionTimer = setInterval(() => {
      if (i < aniItem.length) {
        aniItem[i - 1].setAttribute('style', 'opacity:0');
        aniItem[i].setAttribute('style', 'opacity:1');
        i++;
      }
    }, sec);

    return motionTimer;
  };

  useEffect(() => {
    motion(200);

    // return () => {
    //   clearInterval(motion(200));
    // };
  }, []);

  return (
    <LoadingBox>
      <div>
        <span>
          <FontAwesomeIcon className="animation-item" icon={faCloud} />
          <FontAwesomeIcon className="animation-item" icon={faUmbrella} />
          <FontAwesomeIcon className="animation-item" icon={faBolt} />
          <FontAwesomeIcon className="animation-item" icon={faSun} />
          <FontAwesomeIcon className="animation-item" icon={faSnowflake} />
        </span>
      </div>
    </LoadingBox>
  );
}
