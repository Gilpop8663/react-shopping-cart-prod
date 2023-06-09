import { useCartOperations } from '@hooks/useCartOperations';
import Stepper from '@components/common/Stepper';
import { ProductItemType } from '@type/productType';
import cartIcon from '@assets/cart.svg';
import * as S from './CartQuantityField.style';

interface CartQuantityFieldProps {
  product: ProductItemType;
}

function CartQuantityField({ product }: CartQuantityFieldProps) {
  const {
    findCart,
    onQuantityInputChange,
    decreaseQuantity,
    increaseQuantity,
    countInputRef,
    quantity,
    onQuantityBlur,
    onAddItemToCartAndSyncClick,
  } = useCartOperations(product);

  return (
    <S.StepperContainer>
      {findCart ? (
        <Stepper
          stepperstyle="small"
          onChange={onQuantityInputChange}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
          countInputRef={countInputRef}
          quantity={quantity}
          onQuantityBlur={(event) => onQuantityBlur(event, false)}
          ariaIncreaseLabel={`${product.name} 장바구니 수량 증가`}
          ariaDecreaseLabel={
            quantity > 0 ? `${product.name} 장바구니 수량 감소` : `${product.name} 장바구니 제거`
          }
          isCartPage={false}
        />
      ) : (
        <S.CartIcon
          onClick={onAddItemToCartAndSyncClick}
          type="button"
          aria-label={`${product.name}를 장바구니에 추가`}
          role="cart-icon"
        >
          <img src={cartIcon} alt="" />
        </S.CartIcon>
      )}
    </S.StepperContainer>
  );
}

export default CartQuantityField;
