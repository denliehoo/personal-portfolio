"use client";
import NotFoundOrError from "@/src/components/not-found-or-error";

export default function ErrorPage() {
  return <NotFoundOrError isError={true} />;
}
