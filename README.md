# Online Shop Website
### This Website is about clothing and accesories for men, women and kids.


```
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

```

1. Men
2. Women
3. Kids
4. Accesories