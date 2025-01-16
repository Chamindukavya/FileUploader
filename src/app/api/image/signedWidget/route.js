import { v2 as cloudinary } from "cloudinary";

export async function POST(req) {
  try {
    // Parse JSON body
    const body = await req.json();
    const { paramsToSign } = body;

    // Generate the signature
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET
    );

    return new Response(JSON.stringify({ signature }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
