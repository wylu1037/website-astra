import Link from "next/link";
import Icons from "./global/icons";
import { buttonVariants } from "./ui/button";

const Navigation = () => {
  const user = false;
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-14 w-full border-b border-border bg-background/40 px-4 backdrop-blur-lg">
      <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8" />
            <span className="text-lg font-medium">Astra</span>
          </Link>
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className="text-sm hover:text-foreground/80">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="/pricing">About</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="/pricing">Features</Link>
            </li>
            <li className="text-sm hover:text-foreground/80">
              <Link href="/pricing">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* sm:flex */}
        <div className="flex items-center gap-4">
          {user ? (
            "user button"
          ) : (
            <>
              <Link
                href="/sign-in"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
              >
                Start free trial
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
