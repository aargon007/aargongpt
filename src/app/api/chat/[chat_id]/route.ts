import { NextRequest, NextResponse } from 'next/server';
import { getChat } from '@/services/chat.service';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ chat_id: string }> }
) {
    try {
        const { chat_id } = await params;
        const result = await getChat(chat_id);

        return NextResponse.json(result);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
