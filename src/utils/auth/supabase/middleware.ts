import type { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'src/utils/supabase/middleware';

export async function supabaseMiddleware(req: NextRequest): Promise<NextResponse> {
  const { supabaseClient, res } = createClient(req);

  try {
    const { error } = await supabaseClient.auth.getSession();

    if (error) {
      console.debug('Something went wrong, deleted auth token cookie');
      removeAuthToken(res);
    }
  } catch (err) {
    console.debug('Something went wrong, deleted auth token cookie');
    removeAuthToken(res);
    throw err;
  }

  return res;
}

function removeAuthToken(res: NextResponse): void {
  res.cookies.delete(`sb-${process.env.NEXT_PUBLIC_SUPABASE_REF_ID}-auth-token`);
}
