import { createRoot } from 'react-dom/client';
import AppWrapper from "./AppWrapper.tsx";
import { initThemeStore } from '../stores/themeStore.ts';


//init stores
initThemeStore();

const root = createRoot(document.getElementById("root"));
root.render(<AppWrapper/>);


if(module.hot){
    module.hot.accept();
}