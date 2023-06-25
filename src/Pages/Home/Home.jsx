import Card from "../../Components/Card/Card";

import Layout from "../../Components/Layout/Layout";
import ProductDetail from "../../Components/Product-detail/productDetail";

import useFetch from "../../hooks/useFetch";

const Home = () => {
  let { data,error, loading } = useFetch(
    "https://api.escuelajs.co/api/v1/products",53
  );




  return (
   
    <div>
      
      <Layout>
        <h2 className="text-2xl font-bold mb-6">Home</h2>
        
        <div className=" pb-4 products-container grid items-center justify-center  gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
          loading ? <p className=" font-bold">Loading...</p> :
          data?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              category={item.category.name}
              name={item.title}
              price={item.price}
              img={item.images[0]}
              description = {item.description}
            ></Card>
          ))}
        </div>
        <ProductDetail/>
        
      </Layout>
    </div>
  );
};

export default Home;
