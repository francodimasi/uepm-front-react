import { NextResponse } from 'next/server';
import { Rest } from 'rest';
import { buildQuery } from './helpers';

export async function POST(request: Request) {
  const { post } = Rest();

  const data = await request.json();
  const query = buildQuery(data);

  await post(process.env['MONDAY_URL'], {
    customToken: process.env['MONDAY_API_KEY'],
    data: {
      query,
    },
  });

  return NextResponse.json(
    {},
    {
      status: 200,
    },
  );
}
