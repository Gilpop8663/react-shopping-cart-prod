import { useCartToggleSelection } from '@hooks/recoil/cart/useCartToggleSelection';
import { useCartOperations } from '@hooks/useCartOperations';
import CheckBox from '@components/common/CheckBox';
import Stepper from '@components/common/Stepper';
import deleteIcon from '@assets/delete.svg';
import * as S from './CartItemBox.style';

interface CartItemProps {
  cartId: number;
  productId: number;
  imageUrl: string;
  name: string;
  price: number;
}

function CartItemBox({ cartId, productId, imageUrl, name, price }: CartItemProps) {
  const { isChecked, toggleCheck } = useCartToggleSelection(cartId);

  const {
    onQuantityInputChange,
    decreaseQuantity,
    increaseQuantity,
    countInputRef,
    quantity,
    onQuantityBlur,
    removeCartItemAndDelete,
  } = useCartOperations({ id: productId, imageUrl, name, price });

  return (
    <S.CartItemContainer>
      <CheckBox type="checkbox" checked={isChecked} onChange={toggleCheck} />
      <S.ItemImageWrapper>
        <S.ItemImage src={imageUrl} />
      </S.ItemImageWrapper>
      <S.NameText>{name}</S.NameText>
      <S.ProductInfo>
        <S.DeleteIcon src={deleteIcon} onClick={removeCartItemAndDelete} />
        <Stepper
          stepperstyle="large"
          onChange={onQuantityInputChange}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
          countInputRef={countInputRef}
          quantity={quantity}
          onQuantityBlur={(event) => onQuantityBlur(event, true)}
          ariaIncreaseLabel={`${name} 장바구니 수량 증가`}
          ariaDecreaseLabel={`${name} 장바구니 수량 감소`}
          isCartPage={true}
        />
        <S.PriceText>{`${(price * quantity).toLocaleString('ko-KR')} 원`}</S.PriceText>
      </S.ProductInfo>
    </S.CartItemContainer>
  );
}

export default CartItemBox;
