
import ProductDetailsCard from "@/components/Medication/ProductDetailsCard";
const page = (props: {params: {id: string}}) => {
const medicationId = props.params.id;
  return (
    <ProductDetailsCard medicationId={medicationId}/>
  );
};

export default page;
