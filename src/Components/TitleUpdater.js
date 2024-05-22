import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const TitleUpdater = ({ pageTitle }) => {
  const location = useLocation();  

  useEffect(() => {
    let newTitle = pageTitle;
    if (location.pathname === '/cart') {
        newTitle = 'My Cart';
    }
    else if (location.pathname === '/') {
        newTitle = 'Home - WonderMart';
    }
    document.title = newTitle;
  },[location.pathname, pageTitle]);

  return null;
};

export default TitleUpdater;