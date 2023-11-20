-- DropForeignKey
ALTER TABLE "AccessLog" DROP CONSTRAINT "AccessLog_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "AccessLog" DROP CONSTRAINT "AccessLog_userId_fkey";

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccessLog" ADD CONSTRAINT "AccessLog_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;
