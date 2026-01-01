import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeader = new Headers(request.headers);
  // console.log(requestHeader.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile API Fetching<h1/>",{
    headers:{
      "Content-type":"text/html"
    }
  });
}
