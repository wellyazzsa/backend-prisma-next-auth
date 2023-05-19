import NextAuth, {type NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Sign In',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'prabu@example.com' },
                password: { label: 'Password', type: 'password'},
            },
            async authorize(credentials) {
                //Handle Auth!
                const user = { id: '1', name: 'Ethan', email: 'test@test.com'}
                return user
            },
        }),
    ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
