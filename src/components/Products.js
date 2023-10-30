import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { products } from '../ProductsSlice';
import { useSelector } from 'react-redux';


function Products() {
    const kalas = useSelector(products)
    return (
        <>
            <div className="container">
                <div className="products">
                    <div className="product-subMenu">
                        <ul className="subMenu-links">
                            <li className="subMenu-link home">
                                <a href="#">All Products</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Women</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Men</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Bags</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Shoes</a>
                            </li>
                            <li className="subMenu-link">
                                <a href="#">Watches</a>
                            </li>
                        </ul>
                        <div className="product-buttons">
                            <div className="product-btn">
                                <i className='fas fa-filter'></i>
                                Filter
                            </div>
                            <div className="product-btn">
                                <i className='fas fa-search'></i>
                                Search
                            </div>
                        </div>
                    </div>
                    <div className="products-wrapper">
                        {
                            kalas.map((kala, index) => (
                                <div className="product product-left">
                                    <img key={index} src={process.env.PUBLIC_URL + kala.images[0]} alt="PRODUCT" />
                                    <div className="favorite">
                                        <h2>
                                            <Link to={'/products/' + kala.name.toLowerCase().replaceAll(" ", "-")}>{kala.name}</Link>
                                        </h2>
                                        <div className="heart">
                                            <FaRegHeart className='fa-heart-o' />
                                            {/* <FaHeart className='.fa-heart' /> */}
                                        </div>
                                    </div>
                                    <span className="product-price">{kala.price}</span>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Products;