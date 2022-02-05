const UserOrder = require('../models/UserOrder');

const userOrderAddItem = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a item'
    });
  }
  const item = new UserOrder(body);

  if (!item) {
    return res.status(400).json({ success: false, error: `err` });
  }
  item
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: 'Item added',
        item
      });
    })
    .catch((err) => {
      return res.status(400).json({
        err,
        message: 'Item not added'
      });
    });
};

const userOrderRemoveItem = (req, res) => {
  const _id = req.params.itemId;

  UserOrder.findOneAndDelete(_id, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!item) {
      return res
        .status(404)
        .json({ success: false, error: `Order item not found` });
    }
    return res.status(200).json({ success: true, data: item });
  })
    .clone()
    .catch((err) => console.error(err));
};

const userOrderGetAllItems = (req, res) => {
  UserOrder.find({ userId: req.params.userId }, (err, items) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!items.length) {
      return res.status(404).json({ success: false, error: `Items not found` });
    }
    console.log(items);
    return res.status(200).json({ success: true, data: items });
  })

    .clone()
    .catch((err) => console.error(err));
};

// const itemById = (req, res) => {
//   Item.findOne({ _id: req.params.id }, (err, item) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }

//     if (!item) {
//       return res.status(404).json({ success: false, error: `Item not found` });
//     }
//     return res.status(200).json({ success: true, data: item });
//   }).catch((err) => console.error(err));
// };

// const updateItem = (req, res) => {
//   const body = req.body;
//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: `You must provider a body to update`
//     });
//   }
//   Item.findOne({ _id: req.params.id }, (err, item) => {
//     if (err) {
//       return res.status(404).json({
//         err,
//         message: `Item not found`
//       });
//     }
//     item.name = body.name;
//     item.price = body.price;
//     item.poster = body.poster;

//     item
//       .save()
//       .then(() => {
//         return res.status(200).json({
//           success: true,
//           id: item._id,
//           message: `Item updated!`
//         });
//       })

//       .catch((err) => {
//         return res.status(404).json({
//           err,
//           message: `Item not updated@`
//         });
//       });
//   });
// };

module.exports = {
  userOrderAddItem,
  userOrderRemoveItem,
  userOrderGetAllItems
};
