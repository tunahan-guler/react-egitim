import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toggleBasket } from '../store/slices/productSlice';
import { RootState } from '../store/store'
import Button from './Button';

const Product = () => {
    const { basket, products } = useSelector((state: RootState) => state.productReducer);
    const nav = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <Button buttonTitle="Ekle" onClick={() => nav("/createproduct")} />
            <div>
                {products.map((item: any) => (
                    <li key={item.id}>{item.id} - {item.title} - {item.description} - {item.price}TL <Button buttonTitle={basket.some((x) => x.id === item.id) ? "Sepetten çıkar" : "Sepete Ekle"} onClick={() => dispatch(toggleBasket(item))} /></li>
                ))}
            </div>
        </>
    )
}

export default Product