-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_created_at_idx" ON "User"("created_at");

-- CreateIndex
CREATE INDEX "Chat_user_id_idx" ON "Chat"("user_id");

-- CreateIndex
CREATE INDEX "Chat_created_at_idx" ON "Chat"("created_at");

-- CreateIndex
CREATE INDEX "Chat_user_id_created_at_idx" ON "Chat"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "Message_chat_id_idx" ON "Message"("chat_id");

-- CreateIndex
CREATE INDEX "Message_createdAt_idx" ON "Message"("createdAt");

-- CreateIndex
CREATE INDEX "Message_chat_id_createdAt_idx" ON "Message"("chat_id", "createdAt");
