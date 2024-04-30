/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const handleOptionsRequest = () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Max-Age": "86400"
    }
  });
};

const handleInfoRequest = (request) => {
  try {
    const { cf } = request;
    const ip = request.headers.get("x-real-ip");
    const rayId = request.headers.get("CF-ray");
    const pseudoIPv4 = request.headers.get("CF-Pseudo-IPv4");
    const connectingIPv6 = request.headers.get("CF-Connecting-IPv6");
    const lang = request.headers.get("Accept-Language");
    const userAgent = request.headers.get("User-Agent");

    const info = {
      country: cf.country || null,
      region: cf.region || null,
      city: cf.city || null,
      colo: cf.colo || null,
      latitude: cf.latitude || null,
      longitude: cf.longitude || null,
      service: cf.asOrganization || null
    };

    const responseData = {
      code: 200,
      msg: "OK",
      time: Date.now(),
      data:{
        ip,
        rayId,
        pseudoIPv4,
        connectingIPv6,
        ...info,
        lang,
        userAgent
      }
    };

    return new Response(JSON.stringify(responseData), {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8"
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
    const errorMessage = {
      code: 500,
      msg: "Internal Server Error",
      time: Date.now()
    };

    return new Response(JSON.stringify(errorMessage), { 
      status: 500, 
      headers: { 
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json;charset=utf-8' 
      } 
    });
  }
};

const fetchHandler = (request) => {
  if (request.method === "OPTIONS") {
    return handleOptionsRequest();
  }
  return handleInfoRequest(request);
};

export default { fetch: fetchHandler };
