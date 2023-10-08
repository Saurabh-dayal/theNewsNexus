import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle 
            badge rounded-pill bg-danger" style={{left :'90%', zIndex:'1'}}>{source}
            </span>
          <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107311023-1696369600615-gettyimages-1701837503-AFP_33XB68K.jpeg?v=1696400001&w=1920&h=1080" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
