/*
  Warnings:

  - The primary key for the `UserInBuilding` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "AccessLog" DROP CONSTRAINT "AccessLog_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "AccessLog" DROP CONSTRAINT "AccessLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserInBuilding" DROP CONSTRAINT "UserInBuilding_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "UserInBuilding" DROP CONSTRAINT "UserInBuilding_userId_fkey";

-- AlterTable
ALTER TABLE "AccessLog" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "buildingId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserInBuilding" DROP CONSTRAINT "UserInBuilding_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "buildingId" DROP NOT NULL,
ADD CONSTRAINT "UserInBuilding_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "UserInBuilding" ADD CONSTRAINT "UserInBuilding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInBuilding" ADD CONSTRAINT "UserInBuilding_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;
