import React, { useState } from "react"
import Title from "../../Global/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(items => items.node.category)
  let categories = Array.from(new Set(tempItems))
  categories = ["all", ...categories]
  return categories
}

function Menu({ items }) {
  const [coffeeItems, setCoffeeItems] = useState(items.edges)
  const myItems = items.edges
  const categories = getCategories(items.edges)

  const handleItems = category => {
    if (category === "all") {
      setCoffeeItems([...myItems])
    } else {
      let filteredItems = myItems.filter(
        ({ node }) => node.category === category
      )
      setCoffeeItems(filteredItems)
    }
  }
  if (myItems.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Best of our menu" />
          {/* categories*/}
          <div className="row mb-0">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3 "
                    onClick={() => handleItems(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          {/* items*/}
          <div className="row">
            {coffeeItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  {/*image text*/}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>₦{node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Best of our menu" />
          <div className="row ">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>These are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
