import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background to-transparent">
      <div className="container mx-auto flex justify-center items-center">
        <Logo />
      </div>
    </header>
  );
}
