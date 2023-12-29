import dataGoods from "../../Data/dataGoods";
import { getSelectedCategory } from "../../redux/goodsSlice";
import {useSelector} from 'react-redux';
import Good from "./Good";

const Goods = () => {

   const selectedCategory = useSelector(getSelectedCategory) 

  return (
    <div>
      {dataGoods
      .filter( good =>{
        if (selectedCategory === 'All') return true;
       
        return selectedCategory === good.category;
      })
      .map((good) => 
        <Good key={good.id} good={good} />
      )}
    </div>
  );
};

export default Goods;
