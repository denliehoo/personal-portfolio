"use client";
import NotFoundOrError from "@/src/components/NotFoundOrError/NotFoundOrError";

export default function ErrorPage() {
  return <NotFoundOrError isError={true} />;
}
