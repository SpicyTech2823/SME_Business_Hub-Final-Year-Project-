import{Package, MonitorCog, Headset } from "lucide-react";
import ExtraCard from "./ExtraCard";
const ExtraInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ExtraCard 
        icon= {<Package className="h-8 w-8 text-[#3B8D5C]" />}
        title="Quality Products"
        description="We offer a wide range of high-quality products to meet your needs."
      />
      <ExtraCard 
        icon= {<MonitorCog className="h-8 w-8 text-[#3B8D5C]" />}
        title="System Management"
        description="Our efficient system management ensures smooth operations and customer satisfaction."
      />
      <ExtraCard 
        icon= {<Headset className="h-8 w-8 text-[#3B8D5C]" />}
        title="Expert Support"
        description="Our team of experts is always ready to assist you with any questions or concerns."
      />
    </div>
  )
}

export default ExtraInfo