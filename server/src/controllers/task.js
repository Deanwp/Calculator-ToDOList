const { Task } = require("../../models");

exports.getTasks = async (req, res) => {
  try {
    let data = await Task.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data))

    data = data.map((item) => {
      return {
        ...item,
      }
    })
    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

// exports.addTask = async (req, res) => {
//   try {
//     const { title,price } = req.body
//     let newBeverage = await beverage.create({
//       title,
//       price,
//       image: req.file.filename,
//     })

//     newBeverage = JSON.parse(JSON.stringify(newBeverage))

//     newBeverage = {
//       ...newBeverage,
//       image: process.env.FILE_PATH + newBeverage.image
//     }
    
//     res.send({
//       status: 'success',
//       data: {
//         newBeverage
//       }
//     })

//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

// exports.getTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let data = await beverage.findOne({
//       where: {
//         id,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt",],
//       },
//     });

//     data = JSON.parse(JSON.stringify(data));

//     data = {
//       ...data,
//       image: process.env.FILE_PATH + data.image,
//     };

//     res.send({
//       status: "success...",
//       data,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

// exports.deleteTask = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await beverage.destroy({
//       where: {
//         id,
//       },
//     });

//     res.send({
//       status: "success",
//       message: `Delete task id: ${id} finished`,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };