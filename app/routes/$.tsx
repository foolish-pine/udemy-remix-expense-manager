import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export const loader = ({ params }: LoaderFunctionArgs) => {
  if (params["*"] === "exp") {
    return redirect("/expenses");
  }

  throw Response.json(
    { message: "Not found" },
    {
      status: 404,
    }
  );
};
