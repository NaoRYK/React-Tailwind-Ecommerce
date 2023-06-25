import Card from "../../Components/Card/Card";
import Layout from "../../Components/Layout/Layout";
import ProductDetail from "../../Components/Product-detail/productDetail";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { ShoppingCartContext } from "../../Context/Context";
import { render } from "react-dom";

const Home = () => {
  const context = useContext(ShoppingCartContext)
  useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );

  const renderView = ()=>{
    // if(context.searchByTitle?.length >0){
      if(context.filterType !== null){
        if(context.filteredItems?.length > 0 ){
          console.log(context.filteredItems.length)
          return(
            context.loading ? <p className=" font-bold">Loading...</p> :
            context.filteredItems?.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                category={item.category.name}
                name={item.title}
                price={item.price}
                img={item.images[0]}
                description = {item.description}
              ></Card>
            ))
          )
        }
        else{
          return(<div>
            No Results Found
          </div>)
        }
      }


      
    // 
    else{
        return(
          context.loading ? <p className=" font-bold">Loading...</p> :
          context.data?.slice(0,52).map((item) => (
            <Card
              key={item.id}
              id={item.id}
              category={item.category.name}
              name={item.title}
              price={item.price}
              img={item.images[0]}
              description = {item.description}
            ></Card>
          ))
        
        )}
  }

  return (
   
    <div>
      
      <Layout>
        <h2 className="text-2xl font-bold mb-6">Home</h2>
        <input type="text" placeholder="Search for products" className="text-center mb-4 rounded-lg border text-emerald-600 border-emerald-600 w-80 p-4" 
        onChange={(e)=>{
          context.setSearchByTitle(e.target.value);
        }}
        />
        <h2 className="text-xl font-bold m-6 mb-4">Best Products</h2>
        <div className=" pb-4 products-container grid items-center justify-center  gap-4 grid-cols-4 w-full max-w-screen-lg">
          
          {
          renderView()}
        </div>
        <ProductDetail/>
        
      </Layout>
    </div>
  );
};

export default Home;
