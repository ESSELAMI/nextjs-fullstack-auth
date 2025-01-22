// types/next-auth.d.ts

import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        id: string;
        roles: string[];
        accessToken: string;
        refreshToken: string;
    }
    interface Session {
        user: User;
        accessToken: string;
        refreshToken: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        roles: string[];
        accessToken: string;
        refreshToken: string;
    }
}