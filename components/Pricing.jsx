import CheckIcon from './CheckIcon';
import GradientButton from './GradientButton';

export default function Pricing ({ heading, price, benefit1, benefit2, benefit3, benefit4}) {
    return (
      <div className="w-80 md:w-96">
        <div className="border-skye border-2 rounded shadow-xl">
          <div className="mb-4 text-center">
            <p>
              {heading}
            </p>
            <div className="flex items-center justify-center">
              <p>
                {price}
              </p>
              <p>AED</p>
            </div>
          </div>
          <ul>
            <li className="flex items-center">
             <CheckIcon/>
              <p>{benefit1}</p>
            </li>
            <li className="flex items-center">
             <CheckIcon/>
              <p>{benefit2}</p>
            </li>
            <li className="flex items-center">
              <CheckIcon/>
              <p>{benefit3}</p>
            </li>
            <li className="flex items-center">
              <CheckIcon/>
              <p>{benefit4}</p>
            </li>
          </ul>
          <GradientButton />
        </div>              
      </div>
    );
  };
