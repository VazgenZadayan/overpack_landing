import { NextRequest, NextResponse } from 'next/server';
import { apiEndpoints } from '@/config/env';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contact } = body;

    const backendResponse = await fetch(apiEndpoints.newsletter, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: contact
      }),
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.text();
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: backendResponse.status }
      );
    }

    const responseData = await backendResponse.json();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        contact: contact
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
