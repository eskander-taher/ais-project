/*
  Warnings:

  - You are about to drop the `_BuildingToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BuildingToUser" DROP CONSTRAINT "_BuildingToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BuildingToUser" DROP CONSTRAINT "_BuildingToUser_B_fkey";

-- DropTable
DROP TABLE "_BuildingToUser";

-- CreateTable
CREATE TABLE "UserInBuilding" (
    "userId" INTEGER NOT NULL,
    "buildingId" INTEGER NOT NULL,

    CONSTRAINT "UserInBuilding_pkey" PRIMARY KEY ("userId","buildingId")
);

-- AddForeignKey
ALTER TABLE "UserInBuilding" ADD CONSTRAINT "UserInBuilding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInBuilding" ADD CONSTRAINT "UserInBuilding_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
