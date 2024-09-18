import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(
    'https://cdn-dev.preoday.com/senior-fe-menu-challenge.json'
  );

  const data = await response.json();

  return NextResponse.json(data);
}
