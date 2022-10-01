let products = [
  {
    id: 1,
    name: 'Piano'
  },
  { 
    id: 2, 
    name: 'Violin'
  }
]

exports.getProductsHandler = async (req, res) => {
  res.status(200).json(products)
}

exports.addProductHandler = async (req, res) => {
  if (products.find((product) => product.id === req.body.id)) {
    res.status(409).json('Product id must be unique')
  }
  products.push(req.body)
  res.status(200).json(products)
}

exports.deleteProductHandler = async (req, res) => {
  const index = products.findIndex((product) => product.id == req.params.id)
  if (index >= 0) {
    products.splice(index, 1)
    res.status(200).json(products)
  } else res.status(400).send()
}

exports.editProductHandler = async (req, res) => {
  const index = products.findIndex((product) => product.id == req.params.id)
  if (index >= 0) {
    products.splice(index, 1, req.body)
    res.status(200).json(products)
  } else res.status(400).send()
}
