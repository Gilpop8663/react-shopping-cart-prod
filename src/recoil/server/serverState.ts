import { atom, useRecoilRefresher_UNSTABLE, useRecoilState } from 'recoil';
import cartState from '@recoil/cart/cartState';
import { productListState } from '@recoil/product/productListState';
import { SERVER_NAME, ServerName } from '@constants/urlConstants';

const serverState = atom<ServerName>({
  key: 'serverState',
  default: SERVER_NAME[0],
});

export default serverState;

export const useServer = () => {
  const [server, setServer] = useRecoilState(serverState);

  const refreshServer = useRecoilRefresher_UNSTABLE(serverState);
  const refreshCart = useRecoilRefresher_UNSTABLE(cartState);
  const refreshProduct = useRecoilRefresher_UNSTABLE(productListState);

  const handleServer = (newServer: ServerName) => {
    setServer(newServer);
    refreshServer();
    refreshCart();
    refreshProduct();
  };

  return {
    server,
    handleServer,
  };
};
