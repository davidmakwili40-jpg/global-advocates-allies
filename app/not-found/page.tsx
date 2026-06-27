import Link from "next/link";
import { StandardPage } from "@/components/sections/StandardPage";

export default function NotFoundRoutePage() {
  return (
    <StandardPage title="Page not found" description="The page you are looking for is not available.">
      <Link className="font-semibold text-moss-700 hover:text-moss-900" href="/">
        Return home
      </Link>
    </StandardPage>
  );
}
