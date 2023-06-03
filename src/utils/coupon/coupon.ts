import { CouponType, ServerCouponType } from '@type/couponType';

interface GetAvailableCouponsByTotalPriceParams {
  coupons: CouponType[];
  totalItemsPrice: number;
}

export const getAvailableCouponsByTotalPrice = ({
  coupons,
  totalItemsPrice,
}: GetAvailableCouponsByTotalPriceParams) => {
  if (totalItemsPrice === 0) return [];

  return coupons.filter((coupon) => coupon.minimumPrice <= totalItemsPrice);
};

interface GetDiscountedTotalPriceParams {
  coupon: CouponType;
  deliveryFee: number;
  totalItemsPrice: number;
}

export const getDiscountedTotalPrice = ({
  coupon,
  deliveryFee,
  totalItemsPrice,
}: GetDiscountedTotalPriceParams) => {
  if (totalItemsPrice === 0) {
    throw new Error('총 상품 가격이 0원이여서 쿠폰을 사용할 수 없습니다.');
  }

  if (coupon.type === 'delivery') {
    return totalItemsPrice;
  }

  if (coupon.type === 'price') {
    const discountedPrice = Math.max(0, totalItemsPrice - coupon.value);
    return discountedPrice + deliveryFee;
  }

  if (coupon.type === 'percent') {
    const percentage = 1 - coupon.value / 100;
    return totalItemsPrice * percentage + deliveryFee;
  }
};

interface GetDiscountPriceParams {
  totalItemsPrice: number;
  coupon: CouponType;
}

export const getDiscountPrice = ({ totalItemsPrice, coupon }: GetDiscountPriceParams) => {};

export const couponApiWrapper = (coupons: ServerCouponType[]): CouponType[] => {
  return coupons.map((coupon) => ({
    id: coupon.id,
    name: coupon.name,
    type: coupon.type,
    value: coupon.value,
    minimumPrice: coupon.minimumPrice,
  }));
};
