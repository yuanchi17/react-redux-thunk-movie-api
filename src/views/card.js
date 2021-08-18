import React from 'react'

const card = ({ data }) => {
  return (
    <div className="movie col-sm-12 col-md-4 mb-4">
      <div className="card d-flex justify-content-center">
        <div className="card-body">
          <h5 className="card-title m-0">{data.title}</h5>
          <p className="m-0">{data.title_origin}</p>
          <img
            className="card-img my-2"
            src={`https://image.tmdb.org/t/p/w500${data.image}`}
            alt="圖片"
          ></img>
          <span className="text-muted">上映日期：{data.date}</span>
        </div>
      </div>
    </div>
  )
}

export default card
