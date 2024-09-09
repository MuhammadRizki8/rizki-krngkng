import { BsWordpress, BsCreditCard, BsAndroid } from 'react-icons/bs';
import { SiFlutter, SiFastapi, SiFigma, SiGooglecloud, SiTensorflow, SiFlask, SiLaravel, SiReact, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const StackIcon = ({ stack }) => {
  let icon;
  switch (stack) {
    case 'Flutter':
      icon = <SiFlutter className="text-blue-500" size={24} />;
      break;
    case 'FastAPI':
      icon = <SiFastapi className="text-green-500" size={24} />;
      break;
    case 'Figma':
      icon = <SiFigma className="text-pink-500" size={24} />;
      break;
    case 'WordPress':
      icon = <BsWordpress className="text-blue-600" size={24} />;
      break;
    case 'TriPay':
      icon = <BsCreditCard className="text-yellow-500" size={24} />;
      break;
    case 'Android':
      icon = <BsAndroid className="text-green-500" size={24} />;
      break;
    case 'Tensorflow':
      icon = <SiTensorflow className="text-yellow-500" size={24} />;
      break;
    case 'Flask':
      icon = <SiFlask className="text-gray-200" size={24} />;
      break;
    case 'Google Cloud Platform':
      icon = <SiGooglecloud className="text-blue-700" size={24} />;
      break;
    case 'Laravel':
      icon = <SiLaravel className="text-red-600" size={24} />;
      break;
    case 'React':
      icon = <SiReact className="text-blue-400" size={24} />;
      break;
    case 'TailwindCSS':
      icon = <SiTailwindcss className="text-blue-600" size={24} />;
      break;
    case 'Bootstrap':
      icon = <SiBootstrap className="text-purple-600" size={24} />;
      break;
    default:
      icon = null;
  }
  return icon;
};

export default StackIcon;
