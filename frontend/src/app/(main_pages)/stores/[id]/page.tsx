const page = (props: {params: {id: string}}) => {
  const storeId = props.params.id;
  return <div>Store {storeId} Deatils here...</div>;
};

export default page;
