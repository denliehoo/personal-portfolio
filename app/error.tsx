"use client";
import NotFoundOrError from "@/src/NotFoundOrError/NotFoundOrError";

export default function ErrorPage() {
  return <NotFoundOrError isError={true} />;
}
