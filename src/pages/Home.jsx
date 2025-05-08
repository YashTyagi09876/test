import Section1 from './../Component/HomeComponent/Section1'
import Section2 from './../Component/HomeComponent/Section2'
import Section3 from './../Component/HomeComponent/Section3'
import Section4 from './../Component/HomeComponent/Section4'

import image7 from './../assets/homepage7.png'
import vector1 from './../assets/Vector1.png'
import vector2 from './../assets/Vector2.png'
import image1 from "./../assets/homepage9.png"
import image2 from "./../assets/homepage8.png"
import vector3 from './../assets/Vector3.png'

import Section5 from './../Component/HomeComponent/Section5'
const ProductSlider = () => {

return (
    <div className="px-4 py-8 w-[97%] mx-auto">


      <Section1 />
      <Section2/>
      <Section3 />
      <Section4/>
      <Section5/>
    </div>
  );
};

export default ProductSlider;
