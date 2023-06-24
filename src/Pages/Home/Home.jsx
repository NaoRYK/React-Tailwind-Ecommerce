import Card from "../../Components/Card/Card";
import Layout from "../../Components/Layout/Layout";
import ProductDetail from "../../Components/Product-detail/productDetail";

import useFetch from "../../hooks/useFetch";

const Home = () => {
  let { data,error, loading } = useFetch(
    "https://api.escuelajs.co/api/v1/products",53
  );
  console.log(data)



  return (
   
    <div>
      
      <Layout>
        Home
        
        <div className=" pb-4 products-container grid items-center justify-center  gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
          loading ? <p className=" font-bold">Loading...</p> :
          data?.map((item) => (
            <Card
              key={item.id}
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
