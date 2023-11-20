-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('IN', 'OUT');

-- CreateEnum
CREATE TYPE "AccessStatus" AS ENUM ('GRANTED', 'DENIED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Building" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInBuilding" (
    "userId" INTEGER NOT NULL,
    "buildingId" INTEGER NOT NULL,

    CONSTRAINT "UserInBuilding_pkey" PRIMARY KEY ("userId","buildingId")
);

-- CreateTable
CREATE TABLE "AccessLog" (
    "id" SERIAL NOT NULL,
    "accessStatus" "AccessStatus" NOT NULL DEFAULT 'GRANTED',
    "accessTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "buildingId" INTEGER NOT NULL,

    CONSTRAINT "AccessLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserInBuilding" ADD CONSTRAINT "UserInBuilding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInBuilding" ADD CONSTRAINT "UserInBuilding_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;
