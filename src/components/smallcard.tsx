import classes from "./smallcard.module.css";
import Donut from "./Donut";
import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { dechandler, inchandler, selectcontent } from "../store";
const SmallCard: React.FC<{
  xname: string;
  name: string;
  img: string;
  ximg: string;
}> = (props) => {
  let num = useSelector(selectcontent);
  const dispatch = useDispatch();
  return (
      <div className={classes.holder}>
        <Donut />
          <div className={classes.iconholder}>
            <div className={classes.icon1}>
              <AiFillHeart />
            </div>
            <div className={classes.icon2}>
              <RiShoppingCartFill />
            </div>
          </div>
      <div className={classes.product}>
          <div className={classes.sec1}>

      <div className={classes.price}>AED 50.00</div>
        <div
          className={classes.img}
          style={{
              backgroundImage: `url(${props.img})`,
            }}
            />

        <p className={classes.lin1}>Buy a </p>
        <p className={classes.lin2}>Soiree Shoes</p>
        <p className={classes.lin3}>
          a fancy shoes for the most special night , designed by the best in the
          world , combine comfort and look{" "}
        </p>
            </div>
            <div className={classes.buy}>
      
              <div onClick={() => dispatch(dechandler())} className={classes.dec}>
                <AiOutlineMinus />
              </div>
              <p className={classes.num}>{num}</p>
      
              <div onClick={() => dispatch(inchandler())} className={classes.inc}>
                <AiOutlinePlus />
              </div>
            </div>
            <button className={classes.btn}><p>Show Your Cart</p></button>
      </div>
      <div className={classes.prize}>
        <div>
          <p className={classes.rotate}>Win This</p>
          <div
            className={classes.img2}
            style={{
              backgroundImage: `url(${props.ximg})`,
            }}
          />

          <p className={classes.lin4}>Get a Chance To Win </p>
          <p className={classes.lin5}>Studio Apartment </p>
          <p className={classes.lin6}>
            studio ready for use structured for your preference{" "}
          </p>
        </div>
      </div>
     
    </div>
  );
};
export default SmallCard;
