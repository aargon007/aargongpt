/*
  Warnings:

  - You are about to drop the column `contents` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `description` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "contents",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "userId";
