const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAll() {
  try {
    const allAccessLogs = await prisma.accessLog.findMany();
    return allAccessLogs;
  } catch (error) {
    throw error;
  }
}

async function getById(accessLogId) {
  try {
    const accessLog = await prisma.accessLog.findUnique({
      where: {
        id: accessLogId,
      },
    });
    return accessLog;
  } catch (error) {
    throw error;
  }
}

async function create(accessLog) {
  try {
    const accessLog = await prisma.accessLog.create({
      data: accessLog,
    });
    return accessLog;
  } catch (error) {
    throw error;
  }
}

async function updateById(accessLogId, updatedAccessLogData) {
  try {
    const updatedAccessLog = await prisma.accessLog.update({
      where: {
        id: accessLogId,
      },
      data: updatedAccessLogData,
    });
    return updatedAccessLog;
  } catch (error) {
    throw error;
  }
}