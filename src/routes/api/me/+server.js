// src/routes/api/session/+server.js
import { env } from '$env/dynamic/private';
import { jwtVerify } from 'jose';

export async function GET({ cookies }) {
  const token = cookies.get('session');
  if (!token) {
    return new Response(JSON.stringify({ user: null }), { status: 401 });
  }

  if (!env.JWT_SECRET) {
    console.error('❌ Missing JWT_SECRET in environment variables');
    return new Response(JSON.stringify({ user: null }), { status: 500 });
  }

  try {
    // Проверка JWT с помощью jose
    const { payload } = await jwtVerify(token, new TextEncoder().encode(env.JWT_SECRET));

    return new Response(
      JSON.stringify({
        user: {
          id: payload.userId,
          anonymous: payload.anonymous,
          createdAt: payload.createdAt,
          paymentTransaction: payload.paymentTransaction,
          progress: payload.progress
        }
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.warn('JWT verification failed:', err);
    return new Response(JSON.stringify({ user: null }), { status: 403 });
  }
}
