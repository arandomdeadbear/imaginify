import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
// import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/api/webhooks/clerk"],
  // afterAuth(auth, req, evt) {
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }
  //   if (auth.userId && !auth.isPublicRoute) {
  //     return NextResponse.next();
  //   }
  //   if (auth.userId && !auth.isPublicRoute) {
  //     return NextResponse.next();
  //   }
  // },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
