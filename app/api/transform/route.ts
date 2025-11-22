import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
    if (!file) return NextResponse.json({ error: 'No image' }, { status: 400 });

    // Call RunPod endpoint (replace with yours)
    const runpodUrl = process.env.RUNPOD_URL || 'https://placeholder.runpod.net';
    const body = new FormData();
    body.append('image', file);

    const response = await fetch(runpodUrl, {
      method: 'POST',
      body,
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 });
  }
}
