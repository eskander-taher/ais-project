const createApp = require("./utils/createApp");

const PORT = process.env.PORT | 5000;

const server = createApp();

server.listen(PORT, () => console.log(`Running on port ${PORT}`));

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// async function main() {
// 	// const data = await prisma.userInBuilding.findFirst({
//     //     where:{
//     //         userId: 23,
//     //         buildingId: 24
//     //     }
//     // })

//     const data = await prisma.user.update({
//         where:{
//             id: 23
//         },
//         data:{
//             buildings: {
                
//             }
//         },
//         include:{
//             buildings: true
//         }

//     })
    

// 	console.log(data);
// }

// // main();
