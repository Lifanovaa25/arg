'use client';
import { Params, ProductCard } from '@/src/shared/types/productCard';
import { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

interface Props {
    children: ReactNode;
}
export const CartProvider = ({ children, ...props }: Props) => {
    const [cartItems, setCartItems] = useState<ProductCard[]>([]);
    const [sort, setSort] = useState(0);
    const [openId, setOpenId] = useState(0);
    const [params, setParams] = useState('');
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined' ) {
            try {
                const storedCart = localStorage.getItem('cart');
                if (storedCart) {
                    setCartItems(JSON.parse(storedCart));
                }
                setIsInitialized(true);
            } catch (error) {
                console.error('Failed to initialize cart:', error);
            }
        }
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isInitialized]);
    const onChangeSort = (sort: number) => {
        return setSort(sort);
    };
    const onChangeOpenId = (id: number) => {
        return setOpenId(id);
    };
    const onChangeParams = (props: Params) => {
        const { key, value } = props;
        setParams(`"key":"${key}","value":"${value}"`);
    };

    const totalQuantity = () => {
        return cartItems && cartItems.length > 0
            ? cartItems.reduce((total, currItem) => total + currItem.quantity!, 0)
            : 0;
    };

    const onRemoveCard = (id: number) => {
        setCartItems((currState: any[]) =>
            currState.filter((item: { id: number }) => item.id !== id)
        );
    };
    const onClearCart = () => {
        setCartItems([]);
    };
    const addToCart = (props: ProductCard) => {
        const { id } = props;
        setCartItems((currState: any[] = []) => {
            if (currState.find((item: { id: number }) => item.id === id) == null) {
                return [{ ...props, id, quantity: 1 }, ...currState];
            } else {
                return currState.map((item: { id: number; quantity: number }) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const onPlusCard = useCallback(
        (id: number) => {
            setCartItems((currState: any[] = []) => {
                if (currState.find((item: { id: number }) => item.id === id) == null) {
                    return [{ id, quantity: 1 }, ...currState];
                } else {
                    return currState.map((item: { id: number; quantity: number }) => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity + 1 };
                        } else {
                            return item;
                        }
                    });
                }
            });
        },
        [setCartItems]
    );
    const onMinusCard = useCallback(
        (id: number) => {
            setCartItems((currState: any[] = []) => {
                if (currState.find((item: { id: number }) => item.id === id)?.quantity === 1) {
                    return currState.filter((item: { id: number }) => item.id !== id);
                } else {
                    return currState.map((item: { id: number; quantity: number }) => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity - 1 };
                        } else {
                            return item;
                        }
                    });
                }
            });
        },
        [setCartItems]
    );

    return (
        <>
            <CartContext.Provider
                    value={{
                        cartItems,
                        sort,
                        openId,
                        params,
                        onChangeSort,
                        onChangeParams,
                        onChangeOpenId,
                        totalQuantity,
                        onPlusCard,
                        onClearCart,
                        onMinusCard,
                        addToCart,
                        onRemoveCard,
                    }}
                >
                    {children}
                </CartContext.Provider>
        </>
    );
};

export function useCart() {
    const context = useContext(CartContext);
    return context;
}
