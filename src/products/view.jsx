import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Loading from '../app/loading';
import {fetchProduct} from './actions';

import {values} from './index';

const ProductDetails = (product) => (
<div>
 <div className="section product-header">
    <div className="container">
      <div className="columns">
        <div className="column">
          <span className="title is-3">{product.name}</span>
          <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
          <span className="title is-4 has-text-muted">{values(product.categories).join(', ')}</span>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <div className="image is-2by2">
            <img src={`${API_URL}${product.images[0]}`} />
          </div>
        </div>
        <div className="column is-5 is-offset-1">
          <div className="title is-2">{product.name}</div>
          <p className="title is-3 has-text-muted">£{product.cost}</p>
          <hr />
          <br />
          <br/>
          <br/>
          <p>{product.description}</p>
          <br/>
          <p className="control">
            <a className="button is-default">Buy now</a> {" "}
            <a className="button is-primary">Add to cart</a>
          </p>
          <br />
          <table className="table">
            <tbody>
              <tr>
                <td className="has-text-right">
                  <strong>Added</strong>
                </td>
                <td> {moment(product.datetime).fromNow()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="tabs">
        <ul>
          <li className="is-active"><a>Recipes</a></li>
          <li><a>Reviews</a></li>
        </ul>
      </div>
      <div className="box">
        <p className="menu-label">Recipes</p>
        <ul className="menu-list">
            {product.recipes.map((recipe, index) => (
                <li key={index}><a href={recipe.url}>{recipe.name}</a></li>
            ))}
        </ul>
      </div>
    </div>
    </div>
</div>
);

@connect((state) => {
    return {
        product: state.products.product
    }
})
export default class ProductPage extends Component {
    componentDidMount() {
        const id = this.props.params.productId;
        this.props.dispatch(fetchProduct(id))
    }

    render() {
        if(this.props.product.error)
            return alert(this.props.product.error);
        if(!this.props.product.fetched)
            return <Loading />;

        return ProductDetails(this.props.product.data.data);
    }
}
