import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import Slick from 'slick-carousel/slick/slick.scss';
import SlickTheme  from 'slick-carousel/slick/slick-theme.scss';
import {Link} from 'react-router';

import {
    Panel, Container, Columns, Title
} from '../app/bulma';

import Loading from '../app/loading';
import {fetchLatest, fetchPopular} from '../products/actions';

import './home.scss';


const latestProductsSettings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    centerMode: true,
    adaptiveHeight: false ,
    arrows: false,
    autoplaySpeed: 5000,
    className: 'latestProducts columns'
};

const Spacer = (props) => <span className="Spacer" />

const latestProduct = (product, index) => (
    <div className="latestProduct" key={index}>
        <Link className="no-dec" to={"/products/" + product._id.$oid}>
            <Columns>
                <div className="image">
                    <img
                         src={`${API_URL}${product.images[
                            1 % product.images.length
                         ]}`} />
                </div>
            </Columns>
        </Link>
    </div>
);

const latestProducts = (products) => (
    <Slider {...latestProductsSettings}>
        {products.map(latestProduct)}
    </Slider>
);



const popularProduct = (product, index) => (
    <div className="is-one-third" key={index}>
        <Panel className="product">
            <Link className="no-dec" to={"/products/" + product._id.$oid}>
                <p className="is-marginless">
                    <img className="is-128x128"
                         src={API_URL + product.images[0]} />
                </p>
                <div className="panel-block vCenterContainer">
                    <div className="vCenterContent">
                      {product.name}
                    </div>
                </div>
            </Link>
        </Panel>
    </div>
);

const popularProducts = (products) => (
    <Container className="popularProducts">
        <Columns className="is-multiline">
            {products.map(popularProduct)}
        </Columns>
    </Container>
);


@connect((store) => {
    return {
        latest: store.products.latest.products,
        latestFetched: store.products.latest.fetched,
        latestFetching: store.products.latest.fetching,
        latestError: store.products.latest.error,

        popular: store.products.popular.products,
        popularFetched: store.products.popular.fetched,
        popularFetching: store.products.popular.fetching,
        popularError: store.products.popular.error
    }
})
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchLatest())
        this.props.dispatch(fetchPopular())
    }

    render() {
        if(this.props.latestError) alert(this.props.latestError);
        if(this.props.popularError) alert(this.props.popularError);

        var popular = !this.props.popularFetched
            ? (<Loading/>) : popularProducts(this.props.popular.data);
        window.pops = this.props.popular;

        return (
            <div>
                <div className="center">
                    <div className="homeContainer">
                        <img className="homeImg" src={`${API_URL}/simages/home.jpg`} />
                        <pre className="homeText">{window.SITE_TITLE}</pre>
                    </div>
                </div>
                <h1 className="homeTitle homeUnderline">Maryam&#39;s Favourites</h1>
                <hr className="homeUnderline" />
                {popular}
            </div>
        );
    }
}
