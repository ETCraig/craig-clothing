import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import {
    ProductItemContainer,
    FooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './product-card.styles';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductItemContainer>
            <BackgroundImage imageUrl={imageUrl} alt={name} />
            <FooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </FooterContainer>
            <AddButton buttonType='inverted' onClick={addProductToCart}>Add to cart</AddButton>
        </ProductItemContainer>
    )
}

export default ProductCard;