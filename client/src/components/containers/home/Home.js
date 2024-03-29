import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	getAllProducts,
	getProducts,
	postLocalStorage,
	getWishListOfDB
} from '../../../redux/actions';
import HomeStyle from './styled';
import Carousel from '../carousel';
import ProductCarousel from '../carouselProduct/index';
import {Link} from 'react-router-dom';

const Home = () => {
	const allProducts = useSelector((state) => state.allProducts);
	const cartProduct = useSelector((state) => state.cartProducts);
	const dispatch = useDispatch();
	const reverseProducts = allProducts && allProducts.slice(-10);

	useEffect(() => {
		const user = window.localStorage.getItem('userId');
		if (user) {
			dispatch(postLocalStorage({products: cartProduct, userId: user}));
			window.localStorage.setItem('cart', JSON.stringify([]));
			dispatch(getWishListOfDB(user));
		}
		dispatch(getProducts());
		dispatch(getAllProducts()); // eslint-disable-next-line
	}, []);

	return (
		<HomeStyle>
			<Carousel showThumbs={false} />

			<div className='product__row'>
				<br></br>
				<h3 className='top__text'>NEW RELEASES</h3>
				<Link to='/catalogue'>
					<span>see more</span>
				</Link>
			</div>
			<ProductCarousel items={reverseProducts} />
		</HomeStyle>
	);
};

export default Home;
