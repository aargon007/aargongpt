/*
  Warnings:

  - You are about to drop the column `content` on the `Message` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."PartType" AS ENUM ('text', 'image', 'file', 'tool_call', 'tool_result');

-- AlterEnum
ALTER TYPE "public"."Role" ADD VALUE 'system';

-- AlterTable
ALTER TABLE "public"."Message" DROP COLUMN "content",
ADD COLUMN     "metadata" JSONB;

-- CreateTable
CREATE TABLE "public"."MessagePart" (
    "id" TEXT NOT NULL,
    "type" "public"."PartType" NOT NULL,
    "text" TEXT,
    "image" TEXT,
    "data" JSONB,
    "message_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessagePart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MessagePart_message_id_idx" ON "public"."MessagePart"("message_id");

-- AddForeignKey
ALTER TABLE "public"."MessagePart" ADD CONSTRAINT "MessagePart_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "public"."Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
