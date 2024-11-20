import type { LinksFunction, MetaFunction } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";

import authStyles from "~/styles/auth.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];

export default function AuthPage() {
  return <AuthForm />;
}
