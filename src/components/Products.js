import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { products } from '../ProductsSlice';
import { useSelector } from 'react-redux';
import Collapsible from 'react-collapsible';


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
                                {/* <Collapsible trigger="Filter" className="product-btn">
                                    <p>
                                        <div className="filteredArea">
                                            <div className="filteredArea-wrapper">
                                                <div className="filter-col">
                                                    <ul>
                                                        <li>
                                                            <Link className='filter-links'>Default</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>Popularity</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>Average rating</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>Newness</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>Price: Low to High</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>Price: High to Low</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="filter-col">
                                                    <ul>
                                                        <li>
                                                            <Link className='filter-links'>All</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>$0.00 - $50.00</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>$50.00 - $100.00</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>$100.00 - $150.00</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>$150.00 - $200.00</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>$200.00+</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="filter-col">
                                                    <ul>
                                                        <li>
                                                            <Link className='filter-links'>
                                                                <div className='filter-links__color black'></div>
                                                                Black
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>
                                                                <div className='filter-links__color blue'></div>
                                                                Blue
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>
                                                                <div className='filter-links__color grey'></div>
                                                                Grey
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>
                                                                <div className='filter-links__color green'></div>
                                                                Green
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>
                                                                <div className='filter-links__color red'></div>
                                                                Red
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className='filter-links'>
                                                                <div className='filter-links__color white'></div>
                                                                White
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="filter-col">
                                                    <div className='filter-col-wrapper'>
                                                        <div className='filterTag'>Fashion</div>
                                                        <div className='filterTag'>Lifestyle</div>
                                                        <div className='filterTag'>Denim</div>
                                                        <div className='filterTag'>Streetstyle</div>
                                                        <div className='filterTag'>Crafts</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                </Collapsible> */}
                            </div>
                            <div className="product-btn">
                                <i className='fas fa-search'></i>
                                Search
                            </div>
                        </div>
                    </div>
                    <div className="filteredArea">
                        <div className="filteredArea-wrapper">
                            <div className="filter-col">
                                <ul>
                                    <li>
                                        <Link className='filter-links'>Default</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>Popularity</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>Average rating</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>Newness</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>Price: Low to High</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>Price: High to Low</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter-col">
                                <ul>
                                    <li>
                                        <Link className='filter-links'>All</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>$0.00 - $50.00</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>$50.00 - $100.00</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>$100.00 - $150.00</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>$150.00 - $200.00</Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>$200.00+</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter-col">
                                <ul>
                                    <li>
                                        <Link className='filter-links'>
                                            <div className='filter-links__color black'></div>
                                            Black
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>
                                            <div className='filter-links__color blue'></div>
                                            Blue
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>
                                            <div className='filter-links__color grey'></div>
                                            Grey
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>
                                            <div className='filter-links__color green'></div>
                                            Green
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>
                                            <div className='filter-links__color red'></div>
                                            Red
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='filter-links'>
                                            <div className='filter-links__color white'></div>
                                            White
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter-col">
                                <div className='filter-col-wrapper'>
                                    <div className='filterTag'>Fashion</div>
                                    <div className='filterTag'>Lifestyle</div>
                                    <div className='filterTag'>Denim</div>
                                    <div className='filterTag'>Streetstyle</div>
                                    <div className='filterTag'>Crafts</div>
                                </div>
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